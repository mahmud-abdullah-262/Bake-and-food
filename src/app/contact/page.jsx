'use client'
import { useFoods } from '@/context/FoodContext';
import React, { useMemo } from 'react';

const DELIVERY_FEE = 140;
const DISCOUNT = 0.10;

const Contact = () => {
  const { item, addItem, clearCart } = useFoods();

  // ✅ Same item হলে quantity বাড়ানো
  const cartItems = useMemo(() => {
    const map = {};

    item.forEach(food => {
      if (map[food.id]) {
        map[food.id].quantity += 1;
      } else {
        map[food.id] = { ...food, quantity: 1 };
      }
    });

    return Object.values(map);
  }, [item]);

  // ✅ হিসাব
   const subtotal = cartItems.reduce(
    (acc, curr) => acc + (curr.price ?? 0) * curr.quantity, // ✅ price না থাকলে 0
    0
  );

  const discountAmount = subtotal * DISCOUNT;
  const total = subtotal - discountAmount + DELIVERY_FEE;

  // ✅ Clear cart
  const handlePayment = () => {
   clearCart(); 
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {cartItems.length === 0
          ? 'Your Cart is Empty'
          : `${cartItems.length} Items in Your Cart`}
      </h1>

      {/* Cart List */}
      <div className="space-y-4">
        {cartItems.map(food => (
          <div
            key={food.id}
            className="flex justify-between items-center bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {food.dish_name}
              </h2>
              <p className="text-sm text-gray-500">
                Quantity: {food.quantity}
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-500">
                ৳{food.price} × {food.quantity}
              </p>
              <p className="font-bold text-gray-800">
                ৳{food.price * food.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="mt-8 bg-gray-50 p-6 rounded-2xl shadow-md">
          
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>৳{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2 text-green-600">
            <span>Discount (10%)</span>
            <span>-৳{discountAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>৳{DELIVERY_FEE}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>৳{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;