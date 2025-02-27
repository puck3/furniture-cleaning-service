"use client";

import Image from "next/image";
import React from "react";

interface SocialsIconProps {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
  className?: string;
}

const SocialsIcon: React.FC<SocialsIconProps> = ({
  src,
  alt,
  href,
  width = 32,
  height = 32,
  className = "",
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </a>
  );
};

export default SocialsIcon;
