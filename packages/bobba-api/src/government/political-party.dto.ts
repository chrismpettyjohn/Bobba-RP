import {IsEnum, IsString} from 'class-validator';
import {PoliticalIdeology, PoliticalPartyDTO} from '@bobba-rp/types';

export class PoliticalPartyDTOImplementation implements PoliticalPartyDTO {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  about!: string;

  @IsString()
  badge!: string;

  @IsEnum(PoliticalIdeology)
  ideology!: PoliticalIdeology;
}
