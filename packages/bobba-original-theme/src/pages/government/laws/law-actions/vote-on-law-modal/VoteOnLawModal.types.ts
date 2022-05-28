import {ReactNode} from 'react';
import {Law, LawVoteStatus} from '@instinct-plugin/bobba-rp-types';

export interface VoteOnLawModalProps {
  law: Law;
  vote: LawVoteStatus;
  onFinish(): void;
  children: ReactNode;
}
