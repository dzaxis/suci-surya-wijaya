import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateServiceDto {
  @IsString() title!: string;
  @IsString() slug!: string;
  @IsString() description!: string;
  @IsString() icon!: string;
  @IsOptional() @IsIn(['ACTIVE', 'INACTIVE']) status?: string;
}

export class UpdateServiceDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() icon?: string;
  @IsOptional() @IsIn(['ACTIVE', 'INACTIVE']) status?: string;
}
