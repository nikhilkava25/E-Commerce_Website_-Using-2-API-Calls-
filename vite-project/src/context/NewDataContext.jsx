import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const NewDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      const updatedProducts = res.data.products.map((product) => ({
        ...product,
        id: `fs-${product.id}`,
        source: "dummyjson",
      }));

      setData(updatedProducts);
    } catch (error) {
      console.error("Error Fetching Data:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const getUniqueCategories = (items, key) => {
    if (!items) return [];
    const values = items.map((item) => item[key]);
    return ["All", ...new Set(values)];
  };

  const categoryList = getUniqueCategories(data, "category");

  return (
    <NewDataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryList,
      }}
    >
      {children}
    </NewDataContext.Provider>
  );
};

export const useNewData = () => {
  const context = useContext(NewDataContext);

  if (!context) {
    throw new Error("useNewData must be used within DataProvider");
  }

  return context;
};