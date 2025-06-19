import { Module } from '@nestjs/common';
import { EspecialidadController } from './especialidad.controller';
import { EspecialidadService } from './especialidad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './especialidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService]
})
export class EspecialidadModule {}