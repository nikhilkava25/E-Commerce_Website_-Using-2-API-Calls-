import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcruse = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="text-xl text-gray-700 font-semibold">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>{" "}
          /
          <span
            className="cursor-pointer ml-1"
            onClick={() => navigate("/product")}
          >
            Product
          </span>{" "}
          /<span className="ml-1">{title}</span>
        </h1>
      </div>
    </div>
  );
};

export default Breadcruse;
