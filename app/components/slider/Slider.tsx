"use client";
import React from "react";
import style from "./Slider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";

const Slider = () => {
  const sliderItems = [
    {
      imageUrl: '/images/sliderimage-1.webp',
      heading: "Gbowee Foundation Africa Scholarship Application Portal",
      description: `The Gbowee Peace Foundation Scholars Program offers comprehensive 
        support to enable young people attain inclusive and relevant education.`,
    },
    {
      imageUrl: '/images/sliderimage-2.webp',
      heading: "Gbowee Foundation Africa Scholarship Application Portal",
      description: `The Gbowee Peace Foundation Scholars Program offers comprehensive 
        support to enable young people attain inclusive and relevant education.`,
    },
    {
      imageUrl: '/images/sliderimage-3.webp',
      heading: "Gbowee Foundation Africa Scholarship Application Portal",
      description: `The Gbowee Peace Foundation Scholars Program offers comprehensive 
        support to enable young people attain inclusive and relevant education.`,
    },
    {
      imageUrl: '/images/sliderimage-4.webp',
      heading: "Gbowee Foundation Africa Scholarship Application Portal",
      description: `The Gbowee Peace Foundation Scholars Program offers comprehensive 
        support to enable young people attain inclusive and relevant education.`,
    },
  ];

  return (
    <div className={` ${style.slider}`}>
      <Swiper
        grabCursor={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className={`mySwiper ${style.slider}`}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={` ${style.sliderSlide}`}>
              <span></span>
              <Image
                src={item.imageUrl}
                width={1000}
                height={1000}
                alt={item.heading}
              />

              {/* Slider Content */}
              <div className={`${style.sliderContent}`}>
                {/* heading */}
                <h1 className={`mb-3 ${style.sliderText}`}>{item.heading}</h1>
                {/* Description */}
                <p className={`${style.sliderDescription}`}>
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
