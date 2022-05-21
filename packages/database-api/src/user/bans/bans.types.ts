import {UserEntityStruct} from '../user/user.types';

export interface UserBanEntityStruct {
  id?: number;
  user?: UserEntityStruct;
  ipAddress: string;
  banReason: string;
  machineID: string;
  staffID: number;
  staffMember?: UserEntityStruct;
  banStartedTimestamp: number;
  banExpirationTimestamp: number;
}
