"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "@/styles/ExamplesGallery.scss";

const ExamplesGallery = () => {
  const [sources, setSources] = useState<string[] | null>(null); // null означает, что загрузка идет

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/examples");
        if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
        const data = await res.json();
        setSources(data);
      } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
        setSources([]); // Чтобы не висело в состоянии загрузки
      }
    };

    fetchData();
  }, []);

  const isLoopEnabled = sources && sources.length > 1 ? true : false;

  return (
    <section id="gallery">
      <h1>Примеры наших работ</h1>

      {sources === null ? (
        <div className="gallery-skeleton"></div>
      ) : sources.length > 0 ? (
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
      ) : (
        <p>Нет доступных изображений</p>
      )}
    </section>
  );
};

export default ExamplesGallery;
