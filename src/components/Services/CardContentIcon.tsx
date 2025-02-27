"use client";

import Image from "next/image";
import React from "react";

import CardContentIconProps from "@/types/ServiceCard";

const CardContentIcon: React.FC<CardContentIconProps> = ({
  src,
  title,
  text,
}) => {
  return (
    <div className="card-content-icon">
      <Image src={src} alt={title} width={32} height={32} className="icon" />
      <h4>{title}</h4>
      <strong>{text}</strong>
    </div>
  );
};

export default CardContentIcon;
