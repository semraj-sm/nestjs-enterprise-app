import { TenantBaseEntity } from '../tenant-base-entity';
import { Role } from '../../enums/role.enum';
export declare class User extends TenantBaseEntity {
    fullName: string;
    email: string;
    password: string;
    role: Role;
    isActive: boolean;
    isEmailVerified: boolean;
}
