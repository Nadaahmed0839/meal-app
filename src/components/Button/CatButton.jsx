import React from "react";

export default function CatButton(props) {
  const { categories  , setSelectedCat } = props;
  return (
    <>
      <button
        onClick={() => setSelectedCat("Beef")}
        className="cursor-pointer outline-1 outline-gray-300 hover:bg-white duration-300 m-2 py-1 px-3 rounded-2xl"
      >
        All
      </button>

      {categories.map((currentItem) => (
        <button
          key={currentItem.idCategory}
          onClick={() => setSelectedCat(currentItem.strCategory)}
          className="cursor-pointer outline-1 outline-gray-300 hover:bg-white shadow hover:shadow-xl hover:text-gray-800 duration-300 m-2 py-1 px-3 rounded-2xl"
        >
          {currentItem.strCategory}
        </button>
      ))}
    </>
  );
}
