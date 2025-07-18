import { TenantBaseEntity } from '../tenant-base-entity';
export declare class Tenant extends TenantBaseEntity {
    name: string;
    description?: string;
    brandingTheme?: string;
    isActive: boolean;
}
