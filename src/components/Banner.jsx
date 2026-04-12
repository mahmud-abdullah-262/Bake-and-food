import React from 'react';

const Banner = () => {
  return (
    <div
  className="hero min-h-[400px]"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/PJc3MzN/serghey-savchuk-Vu3-Air6-A1-Bw-unsplash.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content ">
    <div className="items-start">
      <h1 className="mb-5 text-7xl font-black text-[#b88527]">Bake and Cook</h1>
      <p className="mb-5 text-white">
        Freshly baked cakes, pastries, <br /> and desserts crafted with premium ingredients to make your moments sweeter, more delightful, <br /> and truly unforgettable every time you order
      </p>
      <button className="btn bg-[#b88527] text-white">Get Menu</button>
    </div>
  </div>
</div>
  );
};

export default Banner;