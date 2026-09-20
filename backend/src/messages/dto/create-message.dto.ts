import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateMessageDto {
  @IsString() @MinLength(2) name!: string;
  @IsEmail() email!: string;
  @IsString() @MinLength(8) phone!: string;
  @IsString() @MinLength(3) subject!: string;
  @IsString() @MinLength(10) message!: string;
}

export class UpdateMessageStatusDto {
  @IsString() status!: string;
}
