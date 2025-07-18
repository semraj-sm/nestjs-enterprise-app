import { Role } from '../../../shared/enums/role.enum';
export declare class CreateUserDto {
    fullName: string;
    email: string;
    password: string;
    role?: Role;
    isActive?: boolean;
}
