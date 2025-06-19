import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('region')
export class Region {
    @PrimaryColumn({ name: 'cdgreg' })
    CDGREG: number;

    @Column({ name: 'nome' })
    NOME: string;
}
