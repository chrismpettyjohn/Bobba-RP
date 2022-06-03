import {
  GamblingMachine,
  GamblingMachineDTO,
} from '@bobba-rp/types';

export interface GamblingMachineService {
  create(gamblingMachineDTO: GamblingMachineDTO): Promise<GamblingMachine>;
  getAll(): Promise<GamblingMachine[]>;
  getByID(gamblingMachineID: string): Promise<GamblingMachine>;
  updateByID(
    gamblingMachineID: string,
    gamblingMachineDTO: GamblingMachineDTO
  ): Promise<void>;
  deleteByID(gamblingMachineID: string): Promise<void>;
}
