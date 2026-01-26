import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./../../components/Loader/LoadingScreen";
import MealCard from "../MealCard/MealCard";
import CatButton from "../../components/Button/CatButton";

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
        "https://www.themealdb.com/api/json/v1/1/categories.php",
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
      setMeals([]);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      setMeals(res.data.meals ? res.data.meals.slice(0, 20) : []);
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

  return (
    <div className="h-full bg-[#F4F2EE] font-sec pb-20 lg:ps-27 lg:pe-3 lg:ms-40">
      <div className="text-gradient">
        <h1 className="font-main text-[36px] leading-10 pt-15 px-3 font-bold">
          Learn, Cook, Eat Your Food
        </h1>
      </div>

      <div className="mx-10 mt-10 lg:hidden">
        {isLoadingCats ? (
          <Loader />
        ) : (
          <select
            value={selectedCat}
            onChange={(e) => setSelectedCat(e.target.value)}
            className="py-2 text-sm text-body font-medium w-full rounded-md"
          >
            {categ.map((currentItem) => (
              <option
                key={currentItem.idCategory}
                value={currentItem.strCategory}
              >
                {currentItem.strCategory}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mx-2 mt-10 hidden lg:block shadow-2xs">
        {isLoadingCats ? (
          <Loader />
        ) : (
          <CatButton categories={categ} setSelectedCat={selectedCat} />
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        {isLoadingMeals && !isLoadingCats ? (
          <Loader />
        ) : (
          meals.map((currentItem) => (
            <MealCard key={currentItem.idMeal} currentItem={currentItem} />
          ))
        )}
      </div>
    </div>
  );
}
