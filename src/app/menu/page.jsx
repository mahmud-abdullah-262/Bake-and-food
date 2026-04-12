
import Menu from '@/components/Menu';
import React from 'react';
import getFood from '../../../public/foodData';

const menu = async () => {
  const foods = await getFood()
  return (
    <div>
      <Menu foods={foods} ></Menu>
    </div>
  );
};

export default menu;