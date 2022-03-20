import { Prisma } from '@prisma/client';
import { Post } from '@nestjs/common';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from './../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  @MinLength(12, {
    message: 'Número minimo de caracteres é $constraint1',
  })
  @MaxLength(22, {
    message: 'Número máximo de caracteres e $constraint1',
  })
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['ON', 'OFF', 'ABSENT'])
  status: 'ON' | 'OFF' | 'ABSENT';

  @IsString()
  photoPerfil: string;

  @IsOptional()
  posts?: Prisma.PostUncheckedCreateNestedManyWithoutAuthorInput;
}
