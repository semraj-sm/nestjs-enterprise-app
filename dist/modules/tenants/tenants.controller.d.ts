import { TenantsService } from './tenants.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
export declare class TenantsController {
    private readonly tenantsService;
    constructor(tenantsService: TenantsService);
    create(dto: CreateTenantDto): Promise<import("../../shared/database/entities/tenant.entity").Tenant>;
    findAll(): Promise<import("../../shared/database/entities/tenant.entity").Tenant[]>;
    findOne(id: string): Promise<import("../../shared/database/entities/tenant.entity").Tenant>;
    update(id: string, dto: UpdateTenantDto): Promise<import("../../shared/database/entities/tenant.entity").Tenant>;
    remove(id: string): Promise<void>;
}
