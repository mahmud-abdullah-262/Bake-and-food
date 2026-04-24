import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Modal = ({food}) => {
  const {id, dish_name, category, alternative_names, main_ingredients, approximate_nutrition_per_serving, rating, price, possible_price_in_dhaka, cuisine, origin_and_popularity, cooking_steps, image_link} = food
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-sm rounded-full px-4" onClick={()=>document.getElementById('my_modal_2').showModal()}>Show Details</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <figure className='bg-gray-100 p-4 h-90 relative'>
        <Image
          src={image_link}
          alt={dish_name}
          width='300'
          height='100'
          className='object-contain object-center'
        ></Image>
        <div className="badge badge-secondary absolute top-2 right-2"> <FaStar /> {rating} </div>
      </figure>
    <h3 className="font-bold text-xl">{dish_name}</h3>
    {category ?  <div className="badge badge-secondary"><p className='text-md font-bold'>Category:</p> {category}</div> : '' }
    <p className='text-md font-bold mt-4'>Alternative Names: </p>
    <div className='flex flex-col gap-1 '>{alternative_names.map((n, i) => <div key={i} className="badge badge-outline badge-info">{n}</div>)}</div>
    <p className="py-4">{cuisine}</p>
    <p className='font-bold text-md'>Possible price in Dhaka:</p> {Object.keys(possible_price_in_dhaka).map((p, ind) => <div key={ind} className="badge badge-soft badge-primary">{p}: {possible_price_in_dhaka[p]}</div> )}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  );
};

export default Modal;