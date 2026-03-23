import React from "react";
import { getData } from "../context/DataContext";

const Filter = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange,
}) => {
  const { categoryList = [] } = getData() || {};
  return (
    <div>
      <div className="bg-gray-100 mt-10 p-4 rounded-lg h-max hidden md:block w-full md:w-[280px] lg:w-[350px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="bg-white p-2 rounded-md border-2 border-gray-400 w-full"
          placeholder="Search product"
        />

        <h2 className="mt-5 font-semibold text-xl">Category</h2>

        <div className="flex flex-col gap-2 mt-3">
          {categoryList?.map((cat, index) => (
            <label
              key={index}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={handleCategoryChange}
              />
              <span className="uppercase">{cat}</span>
            </label>
          ))}
        </div>

        <h2 className="mt-5 font-semibold text-xl">Price Range</h2>

        <div className="flex flex-col gap-2">
          <label>
            Price: ₹{priceRange[0]}-₹{priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>

        <button
          className="bg-yellow-500 text-white rounded-md px-3 py-2 mt-5 w-full hover:bg-yellow-600 transition"
          onClick={() => {
            setSearch("");
            setCategory("");
            setPriceRange([0, 1000]);
          }}
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
