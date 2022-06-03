import {BusinessPosition} from '@bobba-rp/types';

export interface GovernmentService {
  getAll(): Promise<BusinessPosition[]>;
}
