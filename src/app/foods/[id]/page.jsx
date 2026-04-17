import React from 'react';
import getFood from '../../../../public/foodData';
import Image from 'next/image';
import { PiCookingPotBold } from 'react-icons/pi';

const FoodDetails = async ({params}) => {
  const foods = await getFood()
  const resolvedParams = await params;
  const {id} =  resolvedParams;
  console.log(id)
  const selectedFood = foods.find( food => String(food.id)  === String(id));
  const { dish_name, category, alternative_names, main_ingredients, approximate_nutrition_per_serving, rating, price, possible_price_in_dhaka, cuisine, origin_and_popularity, cooking_steps, image_link} = selectedFood
  return (
    <>
  
 <div className="hero container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image
              src={image_link}
              alt={dish_name}
              width='300'
              height='100'
              className='flex-1 object-contain object-center'
            ></Image>
    <div className='flex-1'>
      <h1 className="text-4xl text-[#8d5c00] font-bold">{dish_name}</h1>
      <div className="card ">
  <div className="card-body">
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold badge badge-warning">Main Ingredients</h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {main_ingredients.map((i,ind) => <li className='text-sm' key={ind}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{i}</span>
      </li>)}
     
    </ul>
    
  </div>
</div>
     
    </div>
  </div>
</div>
 <div className="card container mx-auto">
  <div className="card-body">
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold badge badge-warning">Cocking Steps</h2>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {cooking_steps.map((i,ind) => <li className='text-lg' key={ind}>
        <PiCookingPotBold className='badge badge-warning bg-amber-300'/>
        <span>{i}</span>
      </li>)}
     
    </ul>
    
  </div>
</div>
</>
  );
};

export default FoodDetails;