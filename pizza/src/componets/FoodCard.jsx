import React from "react";
import {AiFillStar} from 'react-icons/ai'


function FoodCard({id ,name , price,desc,img, rating}) {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex  flex-col gap-2 rounded-lg">
      <img
        src= {img}
        alt="pizza"
        className="m-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name} </h2>
        <span className="text-orange-500">₹{price} </span>
      </div>
      <p className="text-sm font-normal"> {desc.slice(0,50)}.... </p>

      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
            <AiFillStar className="mr-1 text-yellow-400"/>{rating}
        </span>
        <button className="p-1 text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-sm" >Add to Card</button>
      </div>
    </div>
  );
}

export default FoodCard;
