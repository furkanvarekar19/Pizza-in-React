import React from 'react'
import Navbar from '../componets/Navbar';
import CategoryMenu from '../componets/CategoryMenu';
import FoodItems from '../componets/FoodItems';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
    </div>
  )
}

export default Home;