import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('especialidad')
export class Especialidad {
  @PrimaryColumn({ name: 'cdgesp' })
  CDGESP: string;

  @Column({ name: 'nome' })
  NOME: string;
}