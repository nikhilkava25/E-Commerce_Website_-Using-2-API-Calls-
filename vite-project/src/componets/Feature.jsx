import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLock,
  faRotateLeft,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faTruck,
    text: "Free Shipping",
    subText: "On orders over $100",
  },
  {
    icon: faLock,
    text: "Secure Payment",
    subText: "100% secure payment",
  },
  {
    icon: faRotateLeft,
    text: "Easy Return",
    subText: "30-day return policy",
  },
  {
    icon: faClock,
    text: "24/7 Support",
    subText: "Customer Support",
  },
];

const Feature = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center sm:text-left space-x-4"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="flex-shrin-0 h-10 w-10 text-gray-600" size="lg" aria-hidden="true"
              />
              <div>
                <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{feature.text}</p>
                    <p className="mt-1 text-sm text-gray-500">{feature.subText}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;