import { Controller, Get, Query } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { FiltroMedicoDto } from './dto/filtro-medico.dto';

@Controller('medicos')
export class MedicoController {
    constructor(private readonly medicoService: MedicoService) { }

    @Get()
    async getMedicos(@Query() filtros: FiltroMedicoDto) {
        return this.medicoService.obtenerMedicos(filtros);
    }
}
