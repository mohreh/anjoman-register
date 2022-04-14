import { Role } from '../enum/role.enum';
import { Address } from 'server/address/entities/address.entity';
import { User as UserEntity } from 'server/users/entities/user.entity';

export interface UserLogin {
  id: string;
  role: Role;
  defaultAddress?: Address;
}

declare global {
  namespace Express {
    interface User extends UserEntity {}
  }
}
