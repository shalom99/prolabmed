"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";


export default function Clinic_gallery() {


  return (
    <div className="bg-primarybg pb-[100px] pt-[100px] px-2">
      <h3 className="text-center mb-10 text-accent font-semibold">WORK GALLERY</h3>
      <h2 className="text-center text-5xl font-bold mb-12">Pro-Lab Gallery</h2>
      <Swiper
        className="py-10 "
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3
          },
    

        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/gallery/lab1.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/gallery/lab2.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/gallery/lab3.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/gallery/person3.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/landing2.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/landing3.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center">
            <img
              className="h-[505px] lg:h-[614px] grow object-cover object-center"
              src="/landing1.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
 
      </Swiper>

      <div className="flex justify-center mt-10">
        <Link href="/development" className="bg-darkerbg p-5 rounded-lg font-bold  hover:text-white duration-500">
          EXPLORE MORE
        </Link>
      </div>
    </div>
  );
}
