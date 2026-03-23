import React, { useEffect, useState } from "react";
import Filter from "../componets/Filter";
import ProductCard from "../componets/ProductCard";
import Pagination from "../componets/Pagination";
import { getData } from "../context/DataContext";

const Products = () => {

  const { data, fetchAllProducts } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);

  const fakestoreData = data;

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  };

  const filteredData = fakestoreData?.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">

        {data?.length > 0 ? (

          <div className="flex gap-8">

            <Filter
              search={search}
              setSearch={setSearch}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleCategoryChange={handleCategoryChange}
            />

            {filteredData?.length > 0 ? (

              <div className="flex flex-col justify-center items-center flex-grow">

                <div className="grid grid-cols-4 gap-6">

                  {filteredData
                    .slice((page - 1) * 8, page * 8)
                    .map((product, index) => (
                      <ProductCard
                        key={product.id || index}
                        product={product}
                      />
                    ))}

                </div>

                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />

              </div>

            ) : (

              <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                <img
                  src="https://plus.unsplash.com/premium_vector-1755083702987-1077bcd970b5?w=600&auto=format&fit=crop&q=60"
                  alt="No Products"
                />
              </div>

            )}

          </div>

        ) : (

          <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
            <h1 className="font-bold text-red-500">Loading...</h1>
          </div>

        )}

      </div>
    </div>
  );
};

export default Products;