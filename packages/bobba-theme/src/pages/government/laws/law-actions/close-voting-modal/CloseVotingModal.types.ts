import {Law} from '@bobba-rp/types';

export interface OpenVotingModalProps {
  law: Law;
  onFinish(): void;
}
