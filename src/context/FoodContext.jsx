'use client'

import { createContext, useContext, useState, useEffect } from "react";
import getFood from "../../public/foodData";

export const FoodContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    getFood().then(data => setFoodData(data));
  }, []);

const addItem = (data) => {
  console.log("Adding:", data);
  setItem(prev => [...prev, data]);
}
const clearCart = () => setItem([]);
  return (
    <FoodContext.Provider value={{ foodData, addItem, item, clearCart }}>
      {children}
    </FoodContext.Provider>
  );
}

export const useFoods = () => {
  const context = useContext(FoodContext); // 
  return context;
}