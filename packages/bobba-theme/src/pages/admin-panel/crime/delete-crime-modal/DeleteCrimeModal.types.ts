import {Crime} from '@bobba-rp/types';

export interface DeleteCrimeModalProps {
  crime: Crime;
  onDelete(): void;
}
