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
      width={1008}
      height={756}
      priority={index === 0}
      loading={index === 0 ? "eager" : "lazy"}
    />
  );
};

export default ExampleSlide;
