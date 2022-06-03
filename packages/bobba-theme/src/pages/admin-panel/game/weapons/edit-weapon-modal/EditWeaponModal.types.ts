import {Weapon} from '@bobba-rp/types';

export interface EditWeaponModalProps {
  weapon: Weapon;
  onChange(): void;
}
