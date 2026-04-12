
'use client'

import Image from 'next/image';
import React from 'react';
import Modal from './Modal';
import Link from 'next/link';

const Menu = ( {foods} )  => {
 
  return (
    <div>
      <h1 className='text-center font-bold text-2xl my-6 text-[#b88527]'>Menu</h1>
      <div className='grid grid-cols-3 justify-items-center items-center gap-4 container mx-auto'>
      {foods.map(food => {
        const {id, dish_name, category, alternative_names, main_ingredients, approximate_nutrition_per_serving, rating, price, possible_price_in_dhaka, cuisine, origin_and_popularity, cooking_steps, image_link} = food
        return(
          <div key={id} className=" w-full">
  {/* content */}
  <figure className="w-full rounded-2xl bg-gray-300">
    <div className="card bg-base-100 w-full shadow-sm">
  <figure className='bg-gray-100 p-4 h-90'>
    <Image
      src={image_link}
      alt={dish_name}
      width='300'
      height='100'
      className='object-contain object-center'
    ></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      
    </h2>
    {category ?  <div className="badge badge-secondary">{category}</div> : '' }
   
    <p>{cuisine}</p> <p className='font-bold text-md'>price: {price}</p>
    <div className="card-actions z-10">
      <Modal food ={food}></Modal>
      <Link href={`foods/${id}`}>
       <div className="btn btn-info btn-sm rounded-full ">Recipe</div>
      </Link>
     
      <div className="btn btn-warning btn-sm rounded-full">Add to cart</div>
    </div>
  </div>
</div>
  </figure>
</div>

)}
        )
      }
  
     
      
      </div>
    </div>
  );
};

export default Menu;