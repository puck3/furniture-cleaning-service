"use client";

import Image from "next/image";
import React from "react";

import { CardHeaderProps } from "@/types/ServiceCard";

const CardHeader: React.FC<CardHeaderProps> = ({ src, title }) => {
  return (
    <header className="flex flex-col">
      <Image
        src={src}
        alt={title}
        width={300}
        height={300}
        className="w-full rounded-t-lg"
      />
      <h3 className="font-semibold text-center text-lg lg:text-xl mt-3">
        {title}
      </h3>
    </header>
  );
};

export default CardHeader;
