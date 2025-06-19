import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Especialidad } from '../especialidad/especialidad.entity';
import { Region } from '../region/region.entity';

@Entity()
export class Medico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'cdgmed' })
    CDGMED: number;

    @Column({ name: 'nome' })
    NOME: string;

    @Column({ name: 'calle' })
    CALLE: string;

    @Column({ name: 'bairro' })
    BAIRRO: string;

    @Column({ name: 'zona' })
    ZONA: string;

    @ManyToOne(() => Especialidad)
    @JoinColumn({ name: 'cdgesp' })
    especialidad: Especialidad;

    @ManyToOne(() => Region)
    @JoinColumn({ name: 'cdgreg' })
    region: Region;
}
