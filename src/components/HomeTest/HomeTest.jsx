import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MealDetails({ onClose, mealId }) {
  const [meal, setMeal] = useState(null);

  // Fetch meal details

  async function getMealDetails(id) {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(res.data.meals[0]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (!mealId) return;
    getMealDetails(mealId);
  }, [mealId]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="font-main text-3xl font-semibold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-xl mb-4"
      />
      <p className="mb-4">{meal.strInstructions}</p>

      <h4 className="font-bold text-xl mb-2">Ingredients:</h4>
      <ul className="list-disc ps-5 mb-4">
        {[...Array(20)].map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          if (!ingredient || ingredient.trim() === '') return null;
          return (
            <li key={i}>
              {measure} {ingredient}
            </li>
          );
        })}
      </ul>

      {meal.strYoutube && (
        <a
          href={meal.strYoutube}
          target="_blank"
          className="inline-block py-2 px-5 bg-red-600 text-white rounded mr-3"
        >
          Youtube
        </a>
      )}
      {meal.strSource && (
        <a
          href={meal.strSource}
          target="_blank"
          className="inline-block py-2 px-5 bg-green-600 text-white rounded"
        >
          Source
        </a>
      )}
    </div>
  );
}
