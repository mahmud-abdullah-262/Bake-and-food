'use client'
import { useFoods } from '@/context/FoodContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';

const Navber = () => {
  const pathname = usePathname();
  const {foodData, addItem, item} = useFoods();
  console.log(item)
  return (
    <>
      <div className="navbar bg-[#f0d7a7] shadow-sm  z-50 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link className={`${pathname === '/' ? 'font-bold text-[#b88527] p-2' : 'bg-white text-[#b88527] p-2'}`} href='/'>Home</Link>
             
              <Link className={pathname === '/menu' ? 'font-bold text-[#b88527] p-2' : 'bg-white text-[#b88527] p-2'} href='/menu'>Menu</Link>
               <Link className={pathname === '/contact' ? 'font-bold text-[#b88527] p-2' : 'bg-white text-[#b88527] p-2'} href='/contact'>Cart <span className='p-1 bg-red-500 text-white font-bold rounded-2xl'>{item.length}</span> </Link>
         
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-black text-[#b88527]">Bake and Cook</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <Link className={`${pathname === '/' ? 'font-bold text-[#b88527] p-2' : ' text-[#b88527] p-2'}`} href='/'>Home</Link>
           
            <Link className={pathname === '/menu' ? 'font-bold text-[#b88527] p-2' : ' text-[#b88527] p-2'} href='/menu'>Menu</Link>

            <Link className={pathname === '/contact' ? 'font-bold text-[#b88527] p-2' : ' text-[#b88527] p-2'} href='/contact'>Cart <span className='p-1 bg-red-500 text-white font-bold rounded-2xl'>{item.length}</span> </Link>

          </ul>
        </div>

        {/* ✅ navbar-end এ ml-auto যোগ করা হয়েছে */}
        <div className="navbar-end ml-auto flex items-center space-x-2">
          <a className="btn bg-[#b88527] text-white">Login</a>
          <a className="btn bg-[#b88527] text-white">Sign Up</a>

         
        </div>
      </div>

      
    </>
  );
};

export default Navber;