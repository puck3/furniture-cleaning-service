"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import ExampleSlide from "./ExampleSlide";
import getExamplesSrc from "@/utils/getExamplesSrc";

import "@/styles/ExamplesGallery.scss";

const ExamplesGallery = () => {
  const [sources, setSources] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExamplesSrc();
        setSources(data);
      } catch (error) {
        console.error("Ошибка загрузки изображений:", error);
      }
    };
    fetchData();
  }, []);

  const isLoopEnabled = sources && sources.length > 1 ? true : false;

  const swiperParams = {
    modules: [Navigation, Pagination, A11y, Autoplay, Mousewheel],
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    loop: isLoopEnabled,
    autoplay: { delay: 5000, pauseOnMouseEnter: true },
    mousewheel: { forceToAxis: true },
    a11y: { enabled: true },
    lazyPreloadPrevNext: 1,
    className: "gallery",
  };

  return (
    <section id="gallery">
      <h2>Примеры наших работ</h2>
      {sources === null ? (
        <div className="gallery-skeleton"></div>
      ) : (
        <Swiper {...swiperParams}>
          {sources.map((src, index) => (
            <SwiperSlide key={`Example${index}`}>
              <ExampleSlide src={src} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ExamplesGallery;
