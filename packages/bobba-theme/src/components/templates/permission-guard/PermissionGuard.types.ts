import {Children} from '@instinct-web/core';
import {RPPermissions} from '@bobba-rp/types';

export interface RPPermissionGuardProps {
  children: Children;
  permission: keyof RPPermissions;
  redirect?: boolean;
}
