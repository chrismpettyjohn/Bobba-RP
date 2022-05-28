import {Children} from '@instinct-web/core';
import {RPPermissions} from '@instinct-plugin/bobba-rp-types';

export interface RPPermissionGuardProps {
  children: Children;
  permission: keyof RPPermissions;
  redirect?: boolean;
}
