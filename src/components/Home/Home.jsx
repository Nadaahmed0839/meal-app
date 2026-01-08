import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [categ, setCateg] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCat, setSelectedCat] = useState("Beef");
  const [isLoadingCats, setIsLoadingCats] = useState(true);
  const [isLoadingMeals, setIsLoadingMeals] = useState(true);

  async function getMealsCat() {
    try {
      setIsLoadingCats(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCateg(res.data.categories);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingCats(false);
    }
  }

  async function getEachMeal(category) {
    try {
      setIsLoadingMeals(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(res.data.meals.slice(0, 20));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingMeals(false);
    }
  }

  useEffect(() => {
    getMealsCat();
  }, []);

  useEffect(() => {
    getEachMeal(selectedCat);
  }, [selectedCat]);

  function Loader() {
    return (
      <div className="flex justify-center currentItems-center py-20 w-full">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#21ba75]"></div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F4F2EE] font-sec pb-20 lg:ps-27 lg:pe-3 lg:ms-40">
      <div className="text-gradient">
        <h1 className="font-main text-[36px] leading-10 pt-15 px-3 font-bold">
          Learn, Cook, Eat Your Food
        </h1>
      </div>

      <div className="mx-10 mt-10 lg:hidden">
        {isLoadingCats ? (<Loader />) : (<select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}
          className="py-2 text-sm text-body font-medium w-full rounded-md">
          {categ.map((currentItem) => (
            <option key={currentItem.idCategory} value={currentItem.strCategory}>
              {currentItem.strCategory}
            </option>
          ))}
        </select>
        )}
      </div>

      <div className="mx-2 mt-10 hidden lg:block shadow-2xs">
        {isLoadingCats ? (<Loader />) : (<>
          <button
            onClick={() => setSelectedCat("Beef")}
            className="cursor-pointer outline-1 outline-gray-300 hover:bg-white duration-300 m-2 py-1 px-3 rounded-2xl">
            All
          </button>

          {categ.map((currentItem) => (
            <button
              key={currentItem.idCategory}
              onClick={() => setSelectedCat(currentItem.strCategory)}
              className="cursor-pointer outline-1 outline-gray-300 hover:bg-white shadow hover:shadow-xl hover:text-gray-800 duration-300 m-2 py-1 px-3 rounded-2xl"
            >
              {currentItem.strCategory}
            </button>
          ))}
        </>
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        {isLoadingMeals ? (
          <Loader />
        ) : (
          meals.map((currentItem) => (
            <div
              key={currentItem.idMeal}
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
          ))
        )}
      </div>
    </div>
  );
}
