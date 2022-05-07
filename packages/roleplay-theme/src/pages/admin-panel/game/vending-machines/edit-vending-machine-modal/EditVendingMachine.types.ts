import {VendingMachine} from '@instinct-plugin/bobba-rp-types';

export interface EditVendingMachineProps {
  vendingMachine: VendingMachine;
  onChange(): void;
}
