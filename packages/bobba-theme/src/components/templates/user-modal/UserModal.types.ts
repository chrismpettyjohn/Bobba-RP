import {ReactNode} from 'react';
import {RPUser} from '@bobba-rp/types';

export interface UserModalProps {
  children: ReactNode;
  user: RPUser;
}
