"use client";

import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "../PhoneLink";
import SocialsIcon from "../SocialsIcon";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 bg-blue-600 shadow-md ${className} py-4 px-6`}
    >
      <div className="w-full flex items-center justify-content ">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/icons/logo.png"
            alt="На главную"
            width={40}
            height={40}
          />
          <span className="text-white text-xl font-semibold">Fresh Wave</span>
        </div>
        <Nav />
        <div className="flex space-x-4">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
          />
          <SocialsIcon
            src="/images/icons/telegram.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="w-7"
          />
          <SocialsIcon
            src="/images/icons/whatsapp.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-7"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
