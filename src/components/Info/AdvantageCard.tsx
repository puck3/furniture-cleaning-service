import Image from "next/image";
import React from "react";

import AdvantageCardProps from "@/types/AdvantageCardProps";

const AdvantageCard: React.FC<AdvantageCardProps> = ({ src, title, text }) => {
  return (
    <div className="advantage-card">
      <Image src={src} alt={title} width={192} height={192} className="image" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default AdvantageCard;
