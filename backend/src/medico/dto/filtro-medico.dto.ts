import { IsOptional, IsString, IsInt, Min, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class FiltroMedicoDto {
    @IsOptional()
    @IsString()
    NOME?: string;

    @IsOptional()
    @IsString()
    CDGESP?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    CDGREG?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsString()
    sortField?: string;

    @IsOptional()
    @IsIn(['ASC', 'DESC'])
    sortOrder?: 'ASC' | 'DESC';
}