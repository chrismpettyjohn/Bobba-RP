import {ReactNode} from 'react';
import {RPPermissions} from '@bobba-rp/types';

export interface AdminLayoutProps {
  children: ReactNode;
  permission?: keyof RPPermissions;
}
