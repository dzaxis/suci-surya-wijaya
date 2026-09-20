import { IsString, IsOptional, IsEmail, IsUrl } from 'class-validator';

export class UpdateCompanyDto {
  @IsOptional() @IsString() companyName?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsString() whatsapp?: string;
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @IsString() website?: string;
  @IsOptional() @IsString() instagram?: string;
  @IsOptional() @IsString() facebook?: string;
  @IsOptional() @IsString() linkedin?: string;
  @IsOptional() @IsString() operatingHours?: string;
  @IsOptional() @IsString() vision?: string;
  @IsOptional() @IsString() mission?: string;
  @IsOptional() @IsString() establishedYear?: string;
}
