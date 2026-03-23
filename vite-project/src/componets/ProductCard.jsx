import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
    const {addToCart}=useCart();

  return (
    <div>
      <div
        className="border border-gray-300 rounded-lg p-3 shadow-sm flex flex-col justify-between cursor-pointer"
        style={{ height: "100%" }}
      >
        <div
          className="flex justify-center items-center mb-2"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <img
            src={product.image}
            alt="Product"
            className="h-40 w-40 object-contain"
          />
        </div>

        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-black mb-3">
          ₹{product.price}
        </p>

        <button 
        onClick={()=>addToCart(product)}
        className="bg-yellow-500 text-sm font-semibold py-2 text-white rounded w-full flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4" />
          Add Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;