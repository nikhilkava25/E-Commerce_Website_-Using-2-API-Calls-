import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../componets/Pagination";
import { useNewData } from "../context/NewDataContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products2 = () => {
  const {addToCart}=useCart();
  const { data, categoryList } = useNewData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleResetFilter = () => {
    setSearch("");
    setCategory("All");
    setPriceRange([0, 5000]);
    setPage(1);
  };

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1],
  );

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 mb-10">
        {data?.length > 0 ? (
          <div className="flex gap-6">
            {/* FILTER SIDEBAR */}
            <div className="w-1/4 hidden md:block mt-4">
              <div className="bg-gray-50 rounded-lg p-4 shadow min:h-[400px]">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="border rounded px-3 py-2 w-full mb-4"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <label className="block mb-2 text-xl font-medium">
                  Category
                </label>

                <div className="mb-4 space-y-1">
                  {categoryList?.map((cat, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={cat}
                        checked={category === cat}
                        onChange={handleCategoryChange}
                        name="category"
                      />
                      <span className="uppercase">{cat}</span>
                    </label>
                  ))}
                </div>

                <label className="block mb-2">
                  Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>

                <input
                  type="range"
                  min={0}
                  max={5000}
                  className="w-full"
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                />

                <button
                  onClick={handleResetFilter}
                  className="bg-yellow-500 text-white rounded-md px-3 py-2 mt-5 w-full hover:bg-yellow-600 transition"
                >
                  Reset Filter
                </button>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            <div className="w-full md:w-3/4">
              {filteredData?.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
                    {filteredData
                      .slice((page - 1) * 8, page * 8)
                      .map((product) => (
                        <div
                          key={product.id}
                          className="bg-white border border-gray-200 rounded-lg shadow p-3 flex flex-col justify-between cursor-pointer"
                          style={{ height: "320px" }}
                        >
                          <div
                            className="h-40 w-full flex justify-center items-center"
                            onClick={() => navigate(`/product2/${product.id}`)}
                          >
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="object-contain h-full"
                            />
                          </div>

                          <h2 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">
                            {product.title}
                          </h2>

                          <p className="text-lg font-bold text-black mb-3">
                            ₹{product.price}
                          </p>

                          <button
                          onClick={(e)=>{
                            e.stopPropagation();
                            addToCart(product)
                          }}
                          className="bg-yellow-500 text-sm font-semibold py-2 text-white rounded w-full flex items-center justify-center gap-2">
                            <FontAwesomeIcon icon={faCartShopping} />
                            Add Cart
                          </button>
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center mt-10">
                  <h1 className="text-xl font-semibold">No Products Found</h1>
                </div>
              )}

              <div className="flex justify-center mt-6">
                <Pagination
                  page={page}
                  dynamicPage={dynamicPage}
                  pageHandler={pageHandler}
                />
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center mt-10">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Products2;
