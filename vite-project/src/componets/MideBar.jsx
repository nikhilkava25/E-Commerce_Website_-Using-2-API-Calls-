import React from "react";
import baner from "../assets/baner.avif";

const MideBar = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div
        className="relative max-w-7xl mx-auto rounded-xl overflow-hidden h-[480px]"
        style={{
          backgroundImage: `url(${baner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65 flex items-center">
          <div className="px-8 md:px-12 max-w-2xl text-white space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trendy Style For <br />
              <span className="text-yellow-500">Men, Women & Jewelry</span>
            </h1>

            <p className="text-gray-200 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              deleniti dolores doloribus numquam dolore facilis.
            </p>

            <button className="mt-4 bg-yellow-600 hover:bg-yellow-500 transition text-black font-semibold px-6 py-3 rounded-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MideBar;
