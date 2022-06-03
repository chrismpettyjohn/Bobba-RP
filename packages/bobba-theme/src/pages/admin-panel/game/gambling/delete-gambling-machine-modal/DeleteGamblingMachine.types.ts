import {GamblingMachine} from '@bobba-rp/types';

export interface DeleteGamblingMachineProps {
  gamblingMachine: GamblingMachine;
  onDelete(): void;
}
