import {Gang} from '@instinct-plugin/bobba-rp-types';

export interface GangService {
  getAll(): Promise<Gang[]>;
  getByID(gangID: string): Promise<Gang>;
}
