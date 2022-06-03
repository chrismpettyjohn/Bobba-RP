import {Weapon} from '@bobba-rp/types';

export interface DeleteWeaponModalProps {
  weapon: Weapon;
  onDelete(): void;
}
