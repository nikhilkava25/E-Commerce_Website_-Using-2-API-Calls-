import React from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";

const Category = () => {
  const navigate = useNavigate();

  // ✅ Only required data
  const { data = [], categoryList = [] } = getData() || {};

  // ⏳ Loading state
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-white text-lg">Loading Category...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryList.map((category, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${category}`)}  // ✅ FIXED
            className="uppercase bg-yellow-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-yellow-500 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;