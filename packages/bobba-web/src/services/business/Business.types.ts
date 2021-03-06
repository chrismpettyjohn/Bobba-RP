import {Business, BusinessDTO, BusinessPosition} from '@bobba-rp/types';

export interface BusinessService {
  create(businessDTO: BusinessDTO): Promise<Business>;
  getAll(): Promise<Business[]>;
  getByID(businessID: string): Promise<Business>;
  delete(businessID: string): Promise<void>;
  getOpenPositions(): Promise<BusinessPosition[]>;
  acceptOpenPosition(positionID: string): void;
}
