import {BusinessDTO} from '@bobba-rp/types';

export interface ConfirmBusinessCreationModalProps {
  businessDTO: BusinessDTO;
  isOpen: boolean;
  onToggle(): void;
}
