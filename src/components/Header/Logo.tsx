"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="logo" href="/#main">
      <Image
        src="/icons/logo.png"
        alt="На главную"
        width={40}
        height={40}
        className="logo-icon"
      />
      <span className="logo-text">FreshWave</span>
    </Link>
  );
};

export default Logo;
