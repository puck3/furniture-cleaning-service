"use client";

import Image from "next/image";
import React from "react";

interface ExampleImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  style: React.CSSProperties;
}

const ExampleImage: React.FC<ExampleImageProps> = ({
  src,
  alt,
  onClick,
  style,
}) => {
  return (
    <div
      className="relative flex-shrink-0 snap-center transition-transform duration-300"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ExampleImage;
