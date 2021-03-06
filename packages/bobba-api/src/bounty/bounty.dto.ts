import {IsNumber} from 'class-validator';
import {BountyDTO} from '@bobba-rp/types';

export class BountyDTOImplementation implements BountyDTO {
  @IsNumber()
  targetUserID!: number;

  @IsNumber()
  reward!: number;

  @IsNumber()
  expiresAt!: number;
}
