import {ReactNode} from 'react';
import {RPPermissions} from '@instinct-plugin/bobba-rp-types';

export interface AdminLayoutProps {
  children: ReactNode;
  permission?: keyof RPPermissions;
}
