import {GamblingMachine} from '@bobba-rp/types';

export interface EditGamblingModalProps {
  gamblingMachine: GamblingMachine;
  onChange(): void;
}
