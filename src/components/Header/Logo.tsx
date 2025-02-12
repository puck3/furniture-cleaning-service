"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <a className="flex items-center space-x-2" href="#top">
      <Image
        src="/icons/logo.png"
        alt="На главную"
        width={40}
        height={40}
        className="w-17"
      />
      <em className="text-white text-2xl font-semibold hidden md:inline">
        Fresh Wave
      </em>
    </a>
  );
};

export default Logo;
