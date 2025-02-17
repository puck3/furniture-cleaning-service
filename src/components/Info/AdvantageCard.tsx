import Image from "next/image";
import React from "react";

import AdvantageCardProps from "@/types/AdvantageCardProps";

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  src,
  alt,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
      <header className="flex flex-col items-center w-full">
        <Image
          src={src}
          alt={alt}
          width={192}
          height={192}
          className="min-w-[30%] mb-4"
        />
        <h3 className="font-semibold text-center text-lg lg:text-xl mt-3">
          {title}
        </h3>
      </header>
      <p className="flex mt-auto align-end text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default AdvantageCard;
