import {FoodType} from '@instinct-plugin/bobba-rp-types';

export interface FoodTypeSelectorProps {
  foodType: FoodType;
  onChange(newFoodType: FoodType): void;
}
