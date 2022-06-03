import {ReactNode} from 'react';
import {Law, LawVoteStatus} from '@bobba-rp/types';

export interface VoteOnLawModalProps {
  law: Law;
  vote: LawVoteStatus;
  onFinish(): void;
  children: ReactNode;
}
