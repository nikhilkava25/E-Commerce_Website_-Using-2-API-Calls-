import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 md:px-20">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
        About <span className="text-yellow-500">NK</span>
      </h1>

      {/* About Text Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-16 space-y-6">
        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold">Jalvix</span>, Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquam quia fuga
          officiis maxime necessitatibus odio eligendi odit cupiditate.
        </p>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum
          beatae eveniet dolore quaerat! Cupiditate ea excepturi iure id
          ratione.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60"
            alt="Product 1"
            className="w-full md:w-1/2 h-72 object-cover"
          />
          <div className="p-8 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Product
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque possimus et corrupti.
            </p>
            <Link to="/product">
              <button className="bg-yellow-600 hover:bg-yellow-500 transition text-white px-6 py-2 rounded-lg">
                View Product
              </button>
            </Link>
          </div>
        </div>

       
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60"
            alt="Product 2"
            className="w-full md:w-1/2 h-72 object-cover"
          />
          <div className="p-8 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Trending Collection
            </h2>
            <p className="text-gray-600">
              Discover our latest arrivals designed for style and comfort.
            </p>
            <Link to="/product2">
              <button className="bg-yellow-600 hover:bg-yellow-500 transition text-white px-6 py-2 rounded-lg">
                View Product
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;