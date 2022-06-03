import {RPUser} from '@instinct-plugin/bobba-rp-types';

export interface RPUserContext {
  rpUser?: RPUser;
  setRPUser(rpUser?: Partial<RPUser>): void;
}

export const defaultRPUserContext: RPUserContext = {
  rpUser: undefined,
  setRPUser: (rpUser?: Partial<RPUser>) => {},
};
