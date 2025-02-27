import Image from "next/image";
import React from "react";

import AdvantageCardProps from "@/types/AdvantageCardProps";

const AdvantageCard: React.FC<AdvantageCardProps> = ({ src, title, text }) => {
  return (
    <div className="advantage-card">
      <Image
        src={src}
        alt={title}
        width={256}
        height={256}
        className="image"
        loading="eager"
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default AdvantageCard;
