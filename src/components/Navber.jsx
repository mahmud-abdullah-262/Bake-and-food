'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
  const pathname = usePathname()
  console.log("NAVBAR RENDER", pathname);
  return (
   <div className="navbar bg-[#f0d7a7] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <Link className={` ${pathname === '/' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}`} 
        href='/'>Home</Link>
     <Link
     className={pathname === '/gallary' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/gallary'>Gallery</Link>
     <Link
     className={pathname === '/menu' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/menu'>Menu</Link>
     <Link
     className={pathname === '/contact' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/contact'>Contact</Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-black text-[#b88527]">Bake and Cook</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 px-1">
    <Link className={` ${pathname === '/' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}`} 
        href='/'>Home</Link>
     <Link
     className={pathname === '/gallary' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/gallary'>Gallery</Link>
     <Link
     className={pathname === '/menu' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/menu'>Menu</Link>
     <Link
     className={pathname === '/contact' ?
       'bg-black text-white p-2' :
        'bg-white text-[#b88527] p-2'}
     href='/contact'>Contact</Link>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <a className="btn bg-[#b88527] text-white">Login</a>
    <a className="btn bg-[#b88527] text-white">Sing Up</a>
  </div>
</div>
  );
};

export default Navber;