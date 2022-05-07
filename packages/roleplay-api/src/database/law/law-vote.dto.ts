import {LawVoteDTO, LawVoteStatus} from '@instinct-plugin/bobba-rp-types';
import {IsEnum} from 'class-validator';

export class LawVoteDTOImplementation implements LawVoteDTO {
  @IsEnum(LawVoteStatus)
  status!: LawVoteStatus;
}
