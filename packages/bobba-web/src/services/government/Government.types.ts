import {BusinessPosition} from '@instinct-plugin/bobba-rp-types';

export interface GovernmentService {
  getAll(): Promise<BusinessPosition[]>;
}
