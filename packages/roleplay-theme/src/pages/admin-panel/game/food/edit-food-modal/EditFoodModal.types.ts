import {Food} from '@instinct-plugin/bobba-rp-types';

export interface EditFoodModalProps {
  food: Food;
  onChange(): void;
}
