"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/ImageGallery.css";

const ImageGallery = () => {
  const [sources, setSources] = useState<string[]>([]);

  useEffect(() => {
    fetch("/examples/sources.json")
      .then((res) => res.json())
      .then(setSources);
  }, []);

  const isLoopEnabled = sources.length > 1;

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={isLoopEnabled}
        modules={[Navigation, Pagination]}
        className="fuchsia-swiper"
      >
        {sources.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full rounded-lg"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
