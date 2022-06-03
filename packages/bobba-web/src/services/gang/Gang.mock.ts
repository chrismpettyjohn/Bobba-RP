import {GangService} from './Gang.types';
import {exampleGang} from '@bobba-rp/types';

export class GangServiceMock implements GangService {
  async getAll() {
    return [exampleGang];
  }

  async getByID(gangID: string) {
    return exampleGang;
  }
}
