import { Column } from 'typeorm';
import { BaseEntity } from './base-entity';

export abstract class TenantBaseEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 64 })
  tenantId!: string;
}
