import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProductListView from "../componets/ProductListView";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      setLoading(true);
      const encodedCategory = encodeURIComponent(category);
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${encodedCategory}`
      );
      setSearchData(res.data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, [category]);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-2 items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>

      {searchData.map((product) => (
        <ProductListView key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CategoryProduct;