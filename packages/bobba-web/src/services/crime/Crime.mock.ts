import {CrimeService} from './Crime.types';
import {exampleCrime, CrimeDTO} from '@bobba-rp/types';

export class CrimeServiceMock implements CrimeService {
  async create(crimeDTO: CrimeDTO) {
    return exampleCrime;
  }

  async getAll() {
    return [exampleCrime];
  }

  async getByID(crimeID: string) {
    return exampleCrime;
  }

  async updateByID(crimeID: string, crimeDTO: CrimeDTO) {}

  async deleteByID(crimeID: string) {}
}
