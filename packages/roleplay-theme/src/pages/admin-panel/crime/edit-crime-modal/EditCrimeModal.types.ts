import {Crime} from '@instinct-plugin/bobba-rp-types';

export interface EditCrimeModalProps {
  crime: Crime;
  onChange(): void;
}
