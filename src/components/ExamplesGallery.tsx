"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "@/styles/ExamplesGallery.scss";

const ExamplesGallery = () => {
  const [sources, setSources] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/examples")
      .then((res) => res.json())
      .then(setSources);
  }, []);

  const isLoopEnabled = sources.length > 1;

  return (
    <section id="gallery">
      <h1>Примеры наших работ</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={isLoopEnabled}
        modules={[Navigation, Pagination]}
        className="gallery-buttons"
      >
        {sources.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Пример работы номер ${index + 1}`}
              className="example-image"
              width={1008}
              height={756}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExamplesGallery;
