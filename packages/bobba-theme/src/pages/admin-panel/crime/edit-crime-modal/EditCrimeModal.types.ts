import {Crime} from '@bobba-rp/types';

export interface EditCrimeModalProps {
  crime: Crime;
  onChange(): void;
}
