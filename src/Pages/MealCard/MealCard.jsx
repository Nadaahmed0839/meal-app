import React from "react";
import { Link } from 'react-router-dom';

export default function MealCard(props) {
  const { currentItem } = props;
  return (
    <>
      <div
        className="group relative bg-white w-[88%] lg:w-[23%] mx-auto text-center rounded-4xl h-110 lg:h-70 mt-30 transform hover:scale-105 duration-300"
      >
        <div className="w-80 lg:w-40 mx-auto relative bottom-10">
          <img
            className="rounded-full aspect-square absolute transform group-hover:rotate-360 duration-300"
            src={currentItem.strMealThumb}
            alt={currentItem.strMeal}
          />
        </div>

        <div className="absolute start-0 end-0 bottom-0">
          <h2 className="font-semibold text-[20px]">
            {currentItem.strMeal.slice(0, 15)}
          </h2>

          <div className="pt-4 pb-6">
            <Link to={`/meal/${currentItem.idMeal}`}>
              <button className="bg-[#21ba75] hover:bg-[#059669] duration-300 rounded-3xl py-2 px-5 text-white font-semibold">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
