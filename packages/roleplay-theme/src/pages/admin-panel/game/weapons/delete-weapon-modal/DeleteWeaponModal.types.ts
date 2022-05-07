import {Weapon} from '@instinct-plugin/bobba-rp-types';

export interface DeleteWeaponModalProps {
  weapon: Weapon;
  onDelete(): void;
}
