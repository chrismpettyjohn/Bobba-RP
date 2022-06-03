import {GovernmentService} from './Government.types';
import {exampleBusinessPosition} from '@bobba-rp/types';

export class GovernmentServiceMock implements GovernmentService {
  async getAll() {
    return [exampleBusinessPosition];
  }
}
