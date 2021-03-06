import {IsString, IsNumber} from 'class-validator';
import {VendingMachineDTO} from '@bobba-rp/types';

export class VendingMachineDTOImplementation implements VendingMachineDTO {
  @IsString()
  name!: string;

  @IsString()
  itemName!: string;

  @IsNumber()
  cost!: number;

  @IsNumber()
  hungerRestored!: number;

  @IsNumber()
  energyGained!: number;

  @IsNumber()
  healthGained!: number;
}
