import {UserEntityStruct} from '../user/user/user.types';

export enum PermissionStatus {
  Enabled = '1',
  Disabled = '0',
}

export function booleanToPermissionStatus(value: boolean): PermissionStatus {
  return value ? PermissionStatus.Enabled : PermissionStatus.Disabled;
}

export function permissionStatusToBoolean(
  permissionStatus: PermissionStatus
): boolean {
  return permissionStatus === PermissionStatus.Enabled;
}

export interface RankEntityStruct {
  id?: number;
  name: string;
  badge: string;
  level: number;
  users?: UserEntityStruct[];
  websiteShowStaff: PermissionStatus;
  websiteShowAdminPanel: PermissionStatus;
  websiteManageNews: PermissionStatus;
  websiteManageRanks: PermissionStatus;
  websiteManageUsers: PermissionStatus;
  websiteManageBans: PermissionStatus;
  websiteManageConfig: PermissionStatus;
  websiteManageBetaCodes: PermissionStatus;
  websiteManageGuestbook: PermissionStatus;
  websiteManageEmulator: PermissionStatus;
  websiteManageComments: PermissionStatus;
  websiteManageForums: PermissionStatus;
}
