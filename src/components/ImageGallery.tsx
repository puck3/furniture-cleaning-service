"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!galleryRef.current) return;

    const containerWidth = galleryRef.current.offsetWidth;
    const scrollPosition = containerWidth * 0.6 * index; // 80% ширины + gap

    galleryRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    if (!galleryRef.current) return;

    const containerWidth = galleryRef.current.offsetWidth;
    const scrollLeft = galleryRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / (containerWidth * 0.6));

    setCurrentIndex(newIndex);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.addEventListener("scroll", handleScroll);
    return () => gallery.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative w-screen overflow-hidden">
      <div
        ref={galleryRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-8 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-center transition-transform duration-300"
            style={{
              width: "60%",
              marginLeft: index === 0 ? "20%" : "0",
              marginRight: index === images.length - 1 ? "20%" : "0",
              transform: `scale(${index === currentIndex ? 1 : 0.9})`,
            }}
            onClick={() => scrollToIndex(index)}
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src={src}
                alt={`Фото ${index + 1}`}
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
