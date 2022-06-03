import {Food} from '@bobba-rp/types';

export interface DeleteFoodModalProps {
  food: Food;
  onDelete(): void;
}
