import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../css/Carousel.css";
import React from "react";

const Carousel = ({ slides }) => {
  return (
    <div className="Carousel-Wrapper mb-12 font-GretaMedium">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div className="Image-Container relative h-[500px]">
              {/* Image */}
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src={slide.image}
                alt={slide.title}
              />

              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Button Container */}
              <div className="Button-Container w-1/3 absolute bottom-12 left-40 text-white z-10">
                <h1 className="text-4xl font-GretaBold">{slide.title}</h1>
                <p className="text-xl mt-3 text-base">{slide.subTitle}</p>
                <button className="mt-4 px-12 py-2 bg-white hover:bg-blue text-lg text-black hover:text-white font-GretaSemi rounded-full border-s-gray-dark transition-all duration-300">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
