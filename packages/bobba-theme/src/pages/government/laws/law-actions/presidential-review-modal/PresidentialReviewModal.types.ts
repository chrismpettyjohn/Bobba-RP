import {Law} from '@bobba-rp/types';

export interface PresidentialReviewModalProps {
  law: Law;
  onFinish(): void;
}
