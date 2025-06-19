export interface Especialidad {
    CDGESP: string;
    NOME: string;
}

export interface Region {
    CDGREG?: number;
    NOME: string;
}

export interface Medico {
    id: number;
    CDGMED: string;
    NOME: string;
    CALLE: string;
    BAIRRO: string;
    ZONA: string;
    especialidad: Especialidad;
    region: Region;
}