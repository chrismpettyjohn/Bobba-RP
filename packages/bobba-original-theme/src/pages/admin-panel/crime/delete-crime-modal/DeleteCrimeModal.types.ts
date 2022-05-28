import {Crime} from '@instinct-plugin/bobba-rp-types';

export interface DeleteCrimeModalProps {
  crime: Crime;
  onDelete(): void;
}
