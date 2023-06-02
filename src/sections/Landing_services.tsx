"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Services_Card from "@/components/Services_card";
import { servicesData } from "@/data/data";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Landing_services() {



  const servicesItem = servicesData;


  return (
    <div className="w-full bg-primarybg">

    <div className="w-full h-auto xl:w-[80%] 2xl:w-[70%] mx-auto pt-[50px] lg:pt-[100px] px-[10px] ">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div>
          <h3 className="font-semibold mb-7 text-accent">OUR SERVICES</h3>
          <h2 className="text-3xl font-bold mb-10">SERVICE AREA</h2>
        </div>
        <div className="flex gap-5 pr-20">
          <BsChevronLeft
            size={50}
            className="button-prev-slide border border-gray-300 hover:text-black rounded-full p-3 text-white bg-darkerbg duration-500 "
          />
          <BsChevronRight
            size={50}
            className="button-next-slide border border-gray-300 hover:text-black rounded-full p-3 text-white bg-darkerbg duration-500"
          />
        </div>
      </div>

      <div className="flex gap-10  py-5">
        
        <Swiper
          className="py-10 pr-20"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 4
            },

          }}
          spaceBetween={30}
          navigation={{
            nextEl:".button-next-slide",
            prevEl: ".button-prev-slide"
          }}
        >
          {servicesItem.map((item) => (
            <SwiperSlide key={item.title}>
              <Services_Card
                icon={item.icon}
                title={item.title}
                description={item.description}
                lightbg={item.lightbg}
                darkbg={item.darkbg}
                scale={item.scale}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
}
