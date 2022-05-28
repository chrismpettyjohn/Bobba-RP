import {VendingMachine} from '@instinct-plugin/bobba-rp-types';

export interface DeleteVendingMachineModalProps {
  vendingMachine: VendingMachine;
  onDelete(): void;
}
