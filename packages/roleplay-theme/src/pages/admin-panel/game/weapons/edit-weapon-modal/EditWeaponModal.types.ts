import {Weapon} from '@instinct-plugin/bobba-rp-types';

export interface EditWeaponModalProps {
  weapon: Weapon;
  onChange(): void;
}
