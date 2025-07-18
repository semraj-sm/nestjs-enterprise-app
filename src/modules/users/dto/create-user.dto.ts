import { IsString, IsEmail, IsEnum, IsOptional, IsBoolean, Length } from 'class-validator';
import { Role } from '../../../shared/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @Length(2, 128)
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @Length(8, 256)
  password!: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role = Role.EMPLOYEE;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;
}
