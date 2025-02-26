import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const ExampleSlide: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="example-image"
      width={1008}
      height={756}
    />
  );
};

export default ExampleSlide;
