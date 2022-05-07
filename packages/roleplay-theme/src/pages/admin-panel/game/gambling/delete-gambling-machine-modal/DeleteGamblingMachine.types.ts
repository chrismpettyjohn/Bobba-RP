import {GamblingMachine} from '@instinct-plugin/bobba-rp-types';

export interface DeleteGamblingMachineProps {
  gamblingMachine: GamblingMachine;
  onDelete(): void;
}
