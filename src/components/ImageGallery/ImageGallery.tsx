"use client";

import { useEffect, useState, useRef } from "react";
import ExampleImage from "./ExampleImage";

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!galleryRef.current) return;

    const gallery = galleryRef.current;

    const handleScroll = () => {
      const containerWidth = gallery.offsetWidth;
      const newIndex = Math.round(gallery.scrollLeft / (containerWidth * 0.6));
      setCurrentIndex(newIndex);
    };

    gallery.addEventListener("scroll", handleScroll);
    return () => gallery.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!galleryRef.current) return;

    const containerWidth = galleryRef.current.offsetWidth;
    const scrollPosition = containerWidth * 0.6 * index;

    galleryRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen overflow-hidden">
      <div
        ref={galleryRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-8 scrollbar-hide"
        onScroll={() => {
          if (!galleryRef.current) return;
          const containerWidth = galleryRef.current.offsetWidth;
          setCurrentIndex(
            Math.round(galleryRef.current.scrollLeft / (containerWidth * 0.6))
          );
        }}
      >
        {images.map((src, index) => (
          <ExampleImage
            key={src}
            src={src}
            alt={`Фото ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            style={{
              width: "60%",
              marginLeft: index === 0 ? "20%" : "0",
              marginRight: index === images.length - 1 ? "20%" : "0",
              transform: `scale(${index === currentIndex ? 1 : 0.9})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
