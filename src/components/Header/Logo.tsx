"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <a className="flex items-center space-x-2" href="#top">
      <Image
        src="/images/icons/logo.png"
        alt="На главную"
        width={40}
        height={40}
      />
      {/* Прячем текст на маленьких экранах */}
      <span className="text-white text-xl font-semibold hidden lg:inline">
        Fresh Wave
      </span>
    </a>
  );
};

export default Logo;
