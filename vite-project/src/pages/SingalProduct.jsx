import React, { useEffect, useState } from "react";
import Breadcruse from "../componets/Breadcruse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SingalProduct = () => {
  const {addToCart}=useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id || !id.includes("-")) {
          console.error("Invalid product ID Formate");
          return;
        }

        const [prefix, pid] = id.split("-");
        let response;

        if (prefix === "fs") {
          response = await axios.get(`https://fakestoreapi.com/products/${pid}`);
        } else if (prefix === "ps") {
          response = await axios.get(`https://dummyjson.com/products/${pid}`);
        } else {
          console.error("Unsuppoted product source");
          return;
        }

        if (response?.data) {
          const prod = response.data;

          setProduct({
            id: id,
            title: prod.title,
            description: prod.description,
            category: prod.category,
            price: prod.price,
            image: prod.image || (prod.images ? prod.images[0] : ""),
          });
        }
      } catch (error) {
        console.error("Error feching", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div>
        <h1>Loding...</h1>
      </div>
    );
  }

  return (
    <div className="px-4 pb-4 md:px-0">
      <Breadcruse />

      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="w-full">
          <img
            src={product.image}
            alt=""
            className="rounded-2xl w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl font-bold text-gray-800">
            {product.title}
          </h1>
        </div>

        <div className="text-gray-700">
          <p className="text-xl text-yellow-600 font-bold">
            {product.price}
            <span className="line-through text-gray-700 ml-3">orignal</span>
          </p>

          <p className="text-gray-600">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Quanity
            </label>

            <input
              type="number"
              min={1}
              value={1}
              readOnly
              className="w-20 border border-gray-300 rounded-lg px-3 py-1"
            />
          </div>

          <button
          onClick={()=>addToCart(product)}
          className="mt-4 flex items-center gap-2 px-6 py-2 text-lg bg-yellow-500 text-white rounded-md">
            <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
            Add To Cart
          </button>
        </div>

      </div>

      <div className="flex items-center justify-center h-screen mt-10"></div>
    </div>
  );
};

export default SingalProduct;