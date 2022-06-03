import {useEffect, useState} from 'react';
import {foodService} from '../../services/food';
import {Food} from '@bobba-rp/types';

export function useFetchFoodByID(foodID: string): Food | undefined {
  const [food, setFood] = useState<Food>();

  useEffect(() => {
    async function fetchFood() {
      setFood(undefined);
      const data = await foodService.getByID(foodID);
      setFood(data);
    }

    fetchFood();
  }, [foodID]);

  return food;
}
