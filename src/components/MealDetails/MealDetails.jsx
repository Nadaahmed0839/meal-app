import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getMealDetails(id) {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!id) return;
    getMealDetails(id);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#F4F2EE]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#21BA75]"></div>
      </div>
    );
  }

  if (!meal) return null;

  return (
    <div className="container mx-auto ps-8 pe-10 pb-10 bg-[#F4F2EE] lg:pb-30">
      <div className="pt-20 lg:pt-10">
        <h1 className="font-main text-5xl font-semibold lg:ms-60">
          {meal.strMeal}
        </h1>

        <img
          className="w-full block rounded-2xl mt-10 lg:w-90 lg:ms-60"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        <div className="py-9 lg:ms-60">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-5 bg-[#DC2626] rounded-[8px] text-white font-sec me-5 inline-block"
          >
            <i className="fa-brands fa-youtube me-2"></i>
            Youtube
          </a>

          <a
            href={meal.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-6 bg-[#21BA75] rounded-[8px] text-white font-sec inline-block"
          >
            <i className="fa-solid fa-globe me-2"></i>
            Source
          </a>
        </div>

        <p className="font-sec text-justify lg:ms-60 lg:absolute lg:top-30 lg:start-100 lg:w-70 lg:ps-6">
          {meal.strInstructions.slice(0, 500)}
        </p>

        <div className="bg-white my-10 rounded-2xl p-10 lg:w-70 lg:absolute lg:top-20 lg:end-5 lg:ms-60 lg:bottom-0">
          <h4 className="font-sec text-2xl font-bold border-b-4 border-gray-200 pb-3">
            Ingredients
          </h4>

          <ul>
            {[...Array(8)].map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];

              if (!ingredient || ingredient.trim() === "") return null;

              return (
                <li
                  key={i}
                  className="border-b-2 border-gray-200 font-sec pt-4 pb-2 flex justify-between"
                >
                  <span>{ingredient}</span>
                  <span>{measure}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
