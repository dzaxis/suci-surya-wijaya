import { IsString, IsOptional, IsIn } from 'class-validator';

export class CreateProjectDto {
  @IsString() title!: string;
  @IsString() slug!: string;
  @IsString() category!: string;
  @IsString() location!: string;
  @IsString() year!: string;
  @IsString() description!: string;
  @IsString() image!: string;
  @IsOptional() @IsIn(['ACTIVE','INACTIVE']) status?: string;
}
export class UpdateProjectDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() slug?: string;
  @IsOptional() @IsString() category?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsString() year?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() image?: string;
  @IsOptional() @IsIn(['ACTIVE','INACTIVE']) status?: string;
}
