"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="custom-swiper"
      >
        {images.map((src, index) => (
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
