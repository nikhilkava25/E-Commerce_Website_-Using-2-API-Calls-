import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faFileInvoice,
  faTrash,
  faShoppingBag,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
        {cartItem.length > 0 ? (
          <div>
            <h1 className="font-bold text-2xl">My Cart({cartItem.length})</h1>

            <div className="mt-10">
              {cartItem.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full"
                >
                  <div className="flex items-center gap-4">
                    {item?.images && Array.isArray(item.images) && (
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-20 h-20 rounded-md object-cover"
                      />
                    )}
                    {item.image &&(
                      <img src={item.image}
                      alt={item.title}
                        className="w-20 h-20 rounded-md object-cover"/>
                    )}

                    <div>
                        <h1 className="md:w-[300px] line-clamp-2">
                        {item.title}
                      </h1>
                      <p className="text-yellow-500 font-semibold text-lg">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "decrease")
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(cartItem, item.id, "increase")
                      }
                    >
                      +
                    </button>
                  </div>

                  <span
                    onClick={() => deleteItem(item.id)}
                    className="rounded-full p-3"
                  >
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="text-yellow-500 text-2xl cursor-pointer"
                    />
                  </span>
                </div>
              ))}
            </div>

            {/* info */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="font-bold text-xl">Delivery info</h1>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-2 rounded-md w-full"
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="p-2 rounded-md w-full"
                />

                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="state"
                    className="p-2 rounded-md w-full"
                  />

                  <input
                    type="text"
                    placeholder="PostCode"
                    className="p-2 rounded-md w-full"
                  />
                </div>

                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Country"
                    className="p-2 rounded-md w-full"
                  />

                  <input
                    type="text"
                    placeholder="PhoneNumber"
                    className="p-2 rounded-md w-full"
                  />
                </div>

                <button className="bg-yellow-500 text-white px-3 py-2 rounded-md w-full">
                  Submit
                </button>

                <div className="text-center">------OR------</div>

                <button className="bg-yellow-500 text-white px-3 py-2 rounded-md w-full">
                  Detect Location
                </button>
              </div>

              <div className="bg-white shadow-xl rounded-md p-7 mt-4 space-y-3">
                <h1 className="font-bold text-2xl">Bill Detlis</h1>

                <div className="flex justify-between">
                  <span>
                    <FontAwesomeIcon icon={faFileInvoice} />
                    Items Total
                  </span>

                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>
                    <FontAwesomeIcon icon={faTruck} />
                    Delivery
                  </span>

                  <span>₹129</span>
                </div>

                <div className="flex justify-between">
                  <span>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Delivery
                  </span>

                  <span>₹129</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold text-lg">
                  <span>Grand Total </span>

                  <span>₹{(totalPrice + 5).toFixed(2)}</span>
                </div>

                <button
                  
                  className="bg-yellow-500 text-white px-3 py-2 rounded-md w-full"
                >
                  Processed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[600px] gap-4 mt-10">
            <h1 className="text-4xl font-bold text-yellow-500">
              Your Cart Empty
            </h1>

            <img src="" alt="" className="w-[300px]" />

            <button 
            onClick={() => navigate("/product")}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md">
              Continue Shapooing
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;