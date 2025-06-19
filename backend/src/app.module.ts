import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Medico } from './medico/medico.entity';
import { Region } from './region/region.entity';
import { Especialidad } from './especialidad/especialidad.entity';
import { MedicoModule } from './medico/medico.module';
import { RegionModule } from './region/region.module';
import { EspecialidadModule } from './especialidad/especialidad.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Medico, Region, Especialidad],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Medico, Region, Especialidad]),
    MedicoModule,
    RegionModule,
    EspecialidadModule,
  ],
})
export class AppModule { }


