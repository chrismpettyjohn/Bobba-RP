import {GamblingMachine} from '@instinct-plugin/bobba-rp-types';

export interface EditGamblingModalProps {
  gamblingMachine: GamblingMachine;
  onChange(): void;
}
