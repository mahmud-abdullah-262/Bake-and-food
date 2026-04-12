import React from 'react';
import getFood from '../../../../public/foodData';

const FoodDetails = async ({params}) => {
  const foods = await getFood()
  const resolvedParams = await params;
  const {id} =  resolvedParams;
  console.log(id)
  const selectedFood = foods.find( food => String(food.id)  === String(id));
  console.log(selectedFood)
  return (
    <div>
      <h1>{selectedFood.dish_name}</h1>
    </div>
  );
};

export default FoodDetails;