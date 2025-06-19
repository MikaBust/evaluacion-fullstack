import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from './medico.entity';
import { FiltroMedicoDto } from './dto/filtro-medico.dto';

@Injectable()
export class MedicoService {
    constructor(
        @InjectRepository(Medico)
        private readonly medicoRepository: Repository<Medico>,
    ) { }

    async obtenerMedicos(filtros: FiltroMedicoDto): Promise<any> {
        const query = this.medicoRepository.createQueryBuilder('medico')
            .leftJoinAndSelect('medico.especialidad', 'especialidad')
            .leftJoinAndSelect('medico.region', 'region');

        if (filtros.NOME && filtros.NOME.trim() !== '') {
            query.andWhere('medico.NOME ILIKE :nombre', { nombre: `%${filtros.NOME}%` });
        }

        if (typeof filtros.CDGREG === 'number' && !isNaN(filtros.CDGREG)) {
            query.andWhere('medico.CDGREG = :region', { region: filtros.CDGREG });
        }

        if (filtros.CDGESP && filtros.CDGESP.trim() !== '') {
            query.andWhere('medico.CDGESP = :especialidad', { especialidad: filtros.CDGESP });
        }

        const allowedSortFields = {
            CDGMED: 'medico.CDGMED',
            NOME: 'medico.NOME',
            CALLE: 'medico.CALLE',
            BAIRRO: 'medico.BAIRRO',
            ZONA: 'medico.ZONA',
            'especialidad.NOME': 'especialidad.NOME',
            'region.NOME': 'region.NOME',
        };

        if (filtros.sortField && allowedSortFields[filtros.sortField]) {
            const campo = allowedSortFields[filtros.sortField];
            const orden = filtros.sortOrder?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
            query.orderBy(campo, orden as 'ASC' | 'DESC');
        }


        // Paginación
        const page = filtros.page || 1;
        const limit = filtros.limit || 20;
        const offset = (page - 1) * limit;

        const [data, total] = await query
            .take(limit)
            .skip(offset)
            .getManyAndCount();

        return {
            data,
            total,
            page,
            limit,
            message: data.length ? 'OK' : 'No se encontraron resultados.',
        };
    }
}