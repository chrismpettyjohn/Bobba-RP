import {Law} from '@instinct-plugin/bobba-rp-types';

export interface PresidentialReviewModalProps {
  law: Law;
  onFinish(): void;
}
