import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Especialidad } from './especialidad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspecialidadService {
    constructor(
        @InjectRepository(Especialidad)
        private readonly especialidadRepository: Repository<Especialidad>,
    ) { }

    async obtenerTodas(): Promise<Especialidad[]> {
        return this.especialidadRepository.find({
            order: { NOME: 'ASC' },
        });
    }
}