import { IsString, IsOptional, IsBoolean, Length } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  @Length(2, 128)
  name!: string;

  @IsOptional()
  @IsString()
  @Length(0, 256)
  description?: string;

  @IsOptional()
  @IsString()
  @Length(0, 128)
  brandingTheme?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;
}
