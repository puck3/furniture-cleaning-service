import Image from "next/image";
import React from "react";

interface ExampleSlideProps {
  src: string;
  index: number;
}

const ExampleSlide: React.FC<ExampleSlideProps> = ({ src, index }) => {
  return (
    <Image
      src={src}
      alt={`Пример работы номер ${index + 1}`}
      className="example-image"
      width={1920}
      height={1440}
      priority={index === 0}
      loading={index === 0 ? "eager" : "lazy"}
      quality={85}
    />
  );
};

export default ExampleSlide;
