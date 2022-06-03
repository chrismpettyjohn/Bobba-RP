import {VendingMachine} from '@bobba-rp/types';

export interface DeleteVendingMachineModalProps {
  vendingMachine: VendingMachine;
  onDelete(): void;
}
