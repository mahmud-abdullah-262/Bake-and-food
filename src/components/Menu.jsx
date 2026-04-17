
'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link';
import NoFood from './NoFood';



const Menu = ( {foods} )  => {
  const [showFood, setShowFood] = useState(foods);
  const [searchInp, setSearchInp] = useState('');
  const handleSearch = () => {
    const expectedFood = foods.filter(food => food.dish_name.toLowerCase().includes(searchInp.toLowerCase()));
    setShowFood(expectedFood);
  };
  
  const handleSelect = (e) => {
    console.log(e.target.value, 'event')
    const value = e.target.value;
    console.log(value, 'value')
     const expectedFood = foods.filter(food => food.category === value);
     {value === 'All' ? setShowFood(foods) : setShowFood(expectedFood)}
    ;
  }
 
  


  
  return (
    <div>
      <h1 className='text-center font-bold text-2xl my-6 text-[#b88527]'>Menu</h1>
      <div className='w-11/12 mx-auto flex justify-center items-center gap-1 mb-6'>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input 
  value={searchInp}
  onChange={e => setSearchInp(e.target.value)}
  type="search" 
  required placeholder="Search" />
</label>

    <button 
    onClick={handleSearch}
    className='btn bg-amber-500'
    >Search</button>

   <select className='btn' onChange={handleSelect}>
    <option value="All">All Categories</option>
    <option value="burger">Burger</option>
    <option value="pizza">Pizza</option>
    <option value="dish">Dish</option>
    <option value="Biriyani">Biriyani</option>
    <option value="beverage">beverage</option>
   </select>
      </div>


      <div className='grid grid-cols-3 justify-items-center items-center gap-4 container mx-auto'>
       
      { showFood.length === 0 ? <NoFood></NoFood> : showFood.map(food => {
        const {id, dish_name, category, alternative_names, main_ingredients, approximate_nutrition_per_serving, rating, price, possible_price_in_dhaka, cuisine, origin_and_popularity, cooking_steps, image_link} = food
        return(
          <div key={id} className=" w-full">
  {/* content */}
  <figure className="w-full rounded-2xl bg-gray-300">
    <div className="card bg-base-100 w-full shadow-sm">
  <figure className='bg-gray-100 p-4 h-90'>
    <div className="hover-3d">
  {/* content */}
  <figure className=" rounded-2xl">
    <Image
          src={image_link}
          alt={dish_name}
          width='300'
          height='100'
          className='object-contain object-center'
        ></Image>
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
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