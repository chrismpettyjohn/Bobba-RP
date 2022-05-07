import {GovernmentService} from './Government.types';
import {exampleBusinessPosition} from '@instinct-plugin/bobba-rp-types';

export class GovernmentServiceMock implements GovernmentService {
  async getAll() {
    return [exampleBusinessPosition];
  }
}
