import React from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItem}=useCart();
  return (
    <div>
      <div className="bg-white py-3 shadow-2xl px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/*Logo */}
          <Link to="/">
            <h1 className="font-bold text-3xl">
              <span className="text-yellow-500 font-serif">N</span>K
            </h1>
          </Link>
          {/*desktop menu */}
          <nav className="flex gap-7 items-center">
            <ul className="md:flex gap-7 items-center text-xl font-semibold hidden">
              <NavLink to="/" className="text-black">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="text-black">
                <li>About</li>
              </NavLink>
              <NavLink to="/product" className="text-black">
                <li>Product1</li>
              </NavLink>
              <NavLink to="/product2" className="text-black">
                <li>Product2</li>
              </NavLink>
            </ul>
              <Link to="/cart" className="relative">
                <span className="text-2xl">🛒</span>
                <span className="bg-yellow-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
                  {cartItem.length}
                </span>
              </Link>
            <div className="md:hidden text-3xl ml-2 select-none">
                ≡
            </div>
          </nav>
        </div>
        <div className="md:hidden mt-2 bg-white border-t py-4 px-6 shadow-md text-lg font-semibold">
            <ul className="space-y-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">product1</Link></li>
                <li><Link to="/">Product2</Link></li>
            </ul>
            <Link to="/cart" className="relative">
              <span className="text-2xl">🛒</span>
              <span className="bg-yellow-500 px-2 rounded-full absolute -top-3 -right-3 text-white text-sm">
                {cartItem.length}
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
