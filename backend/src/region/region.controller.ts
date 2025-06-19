import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('regiones')
export class RegionController {
    constructor(private readonly regionService: RegionService) { }

    @Get()
    getTodas() {
        return this.regionService.obtenerTodas();
    }
}