import {VendingMachine} from '@bobba-rp/types';

export interface EditVendingMachineProps {
  vendingMachine: VendingMachine;
  onChange(): void;
}
