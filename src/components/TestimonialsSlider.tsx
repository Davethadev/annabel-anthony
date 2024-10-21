import React, { useRef, useCallback } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { testimonials } from "../constants";
// import { useTestimonialAnimation } from "../../hooks/useTestimonialAnimation";

export const TestimonialsSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType>();

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const goNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  const goPrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  // const { isFirstCard, isLastCard } = useTestimonialAnimation(testimonials);

  return (
    <div className="relative w-[80%] mx-auto flex items-center gap-4">
      <button
        className={
          "h-10 w-10 bg-white rounded-full hidden lg:grid grid-cols-1 place-content-center place-items-center absolute z-20 -left-16 top-1/2"
        }
        onClick={goPrev}
      >
        <Image
          src={"/assets/arrow-left.svg"}
          alt=""
          width={8}
          height={14}
          className="w-4 h-4"
        />
      </button>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        autoplay
        onSwiper={handleSwiper}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => {
          const { id, comments, name, role } = testimonial;
          return (
            <SwiperSlide key={id}>
              <div className="bg-bright_gray h-80 rounded-lg">
                <article className="px-6 pt-12 pb-6 text-left">
                  <div className="space-y-3">
                    {comments.map((comment, index) => (
                      <p
                        key={index}
                        className="font-satoshi font-normal text-sm text-black"
                      >
                        {comment}
                      </p>
                    ))}
                  </div>
                  <div className="absolute right-4 bottom-4 text-right">
                    <h3 className="font-satoshi font-bold text-lg text-black">
                      {name}
                    </h3>
                    <small className="font-satoshi font-normal text-xs text-black">
                      {role}
                    </small>
                  </div>
                </article>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className={
          "h-10 w-10 bg-white rounded-full hidden lg:grid grid-cols-1 place-content-center place-items-center absolute z-20 -right-16 top-1/2"
        }
        onClick={goNext}
      >
        <Image
          src={"/assets/arrow-right.svg"}
          alt=""
          width={8}
          height={14}
          className="w-4 h-4"
        />
      </button>
    </div>
  );
};
