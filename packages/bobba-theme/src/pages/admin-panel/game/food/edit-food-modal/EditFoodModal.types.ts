import {Food} from '@bobba-rp/types';

export interface EditFoodModalProps {
  food: Food;
  onChange(): void;
}
