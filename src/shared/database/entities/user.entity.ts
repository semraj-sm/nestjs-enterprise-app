import { Entity, Column, Unique } from 'typeorm';
import { TenantBaseEntity } from '../tenant-base-entity';
import { Role } from '../../enums/role.enum';

@Entity('users')
@Unique(['email'])
export class User extends TenantBaseEntity {
  @Column({ type: 'varchar', length: 128 })
  fullName!: string;

  @Column({ type: 'varchar', length: 128 })
  email!: string;

  @Column({ type: 'varchar', length: 256 })
  password!: string;

  @Column({ type: 'enum', enum: Role, default: Role.EMPLOYEE })
  role!: Role;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @Column({ type: 'boolean', default: false })
  isEmailVerified!: boolean;
}
