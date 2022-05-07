import {Food} from '@instinct-plugin/bobba-rp-types';

export interface DeleteFoodModalProps {
  food: Food;
  onDelete(): void;
}
