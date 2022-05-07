import {Law} from '@instinct-plugin/bobba-rp-types';

export interface OpenVotingModalProps {
  law: Law;
  onFinish(): void;
}
