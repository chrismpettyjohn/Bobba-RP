import {ReactNode} from 'react';
import {RPUser} from '@instinct-plugin/bobba-rp-types';

export interface UserModalProps {
  children: ReactNode;
  user: RPUser;
}
