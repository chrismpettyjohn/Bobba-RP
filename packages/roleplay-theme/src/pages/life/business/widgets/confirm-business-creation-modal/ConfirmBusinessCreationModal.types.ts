import {BusinessDTO} from '@instinct-plugin/bobba-rp-types';

export interface ConfirmBusinessCreationModalProps {
  businessDTO: BusinessDTO;
  isOpen: boolean;
  onToggle(): void;
}
