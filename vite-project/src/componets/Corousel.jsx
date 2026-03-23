import React, { useEffect, useRef } from "react";
import Catagory from "./Catagory";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import { getData } from "../context/DataContext";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Corousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(Swiper) => {
            Swiper.params.navigation.prevEl = prevRef.current;
            Swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
        >
          {data.slice(0, 7).map((item, index) => (
            <SwiperSlide key={index}>
              <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
                <div className="flex flex-col md:flex-row items-center justify-center px-4 gap-10 h-[600px]">
                  <div className="text-white space-y-4 max-w-xl">
                    <h3 className="text-yellow-500 text-sm font-semibold">
                      Powering Your Website with the Best in Electronics
                    </h3>

                    <h1 className="text-2xl md:text-4xl font-bold uppercase">
                      {item.title}
                    </h1>

                    <p className="text-gray-400">{item.description}</p>

                    <button className="bg-yellow-600 text-white px-5 py-2 rounded-lg">
                      Shop Now
                    </button>
                  </div>

                  <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                    <div className="absolute w-full h-full bg-white rounded-full shadow-lg shadow-red-300 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[250px] h-[250px] object-contain rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="absolute top-1/2 left-6 translate-y-1/2 z-10 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-white bg-yellow-600 p-3 rounded-full text-xl"
          />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-6 translate-y-1/2 z-10 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white bg-yellow-600 p-3 rounded-full text-xl"
          />
        </div>
      </div>
      <Catagory />
    </>
  );
};

export default Corousel;
