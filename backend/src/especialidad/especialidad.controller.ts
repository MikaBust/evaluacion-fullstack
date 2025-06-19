import { Controller, Get } from '@nestjs/common';
import { EspecialidadService } from './especialidad.service';

@Controller('especialidades')
export class EspecialidadController {
    constructor(private readonly especialidadService: EspecialidadService) { }

    @Get()
    getTodas() {
        return this.especialidadService.obtenerTodas();
    }
}