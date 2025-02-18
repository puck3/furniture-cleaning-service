"use client";

import Image from "next/image";
import React from "react";

import { CardContentIconProps } from "@/types/ServiceCard";

const CardContentIcon: React.FC<CardContentIconProps> = ({
  src,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg py-2">
      <Image
        src={src}
        alt={title}
        width={800}
        height={800}
        className="w-8 h-8"
      />
      <span className="text-sm text-gray-600 mt-1">{title}</span>
      <strong className="font-bold">{text}</strong>
    </div>
  );
};

export default CardContentIcon;
