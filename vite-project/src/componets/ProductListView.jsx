import React from "react";
import { useNavigate } from "react-router-dom";

const ProductListView = ({ product }) => {
  const navigate =useNavigate();
  const dummyProduct = product || {
    id: 1,
    title: "Sample Product 1",
    price: 49.9,
    image:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60",
  };

  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex gap-7 items-center p-3 rounded-md">
        
        <img
         
          src={dummyProduct.image}
          alt={dummyProduct.title}
          className="md:h-40 h-24 md:w-40 w-24 rounded-md cursor-pointer object-cover"
        />

        <div className="space-y-2">
          <h2 className="font-bold md:text-xl text-lg line-clamp-3 w-[220px]">
            {dummyProduct.title}
          </h2>

          <p className="font-semibold flex items-center md:text-lg text-sm">
            ₹
            <span className="md:text-4xl ml-1">
              {dummyProduct.price}
            </span>
          </p>

          <p className="text-sm">
            FREE Delivery <span className="font-semibold">Fri 18 Apr</span>
            <br />
            Or faster delivery <span className="font-semibold">Tomorrow 17 Apr</span>
          </p>

          <button className="bg-yellow-500 text-white px-3 py-1 rounded-md">
            Add Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductListView;