import { Entity, Column, Unique } from 'typeorm';
import { TenantBaseEntity } from '../tenant-base-entity';

@Entity('tenants')
@Unique(['name'])
export class Tenant extends TenantBaseEntity {
  @Column({ type: 'varchar', length: 128 })
  name!: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  brandingTheme?: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;
}
