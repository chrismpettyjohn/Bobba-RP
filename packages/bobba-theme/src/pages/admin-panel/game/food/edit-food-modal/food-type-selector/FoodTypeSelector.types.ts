import {FoodType} from '@bobba-rp/types';

export interface FoodTypeSelectorProps {
  foodType: FoodType;
  onChange(newFoodType: FoodType): void;
}
