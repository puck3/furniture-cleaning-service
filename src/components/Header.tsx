"use client";

import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import { formatPhoneNumberIntl } from "react-phone-number-input";

interface HeaderProps {
  className?: string;
}

const phoneNumber = "+79966309098"; // Замените на актуальный номер
const formattedPhoneNumber = formatPhoneNumberIntl(phoneNumber);

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
          <a
            href={`tel:{phoneNumber}`}
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
          >
            {formattedPhoneNumber}
          </a>
          <a
            href={`https://t.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Image
              src="/images/icons/telegram.svg"
              alt="Telegram"
              width={30}
              height={30}
              className="w-7"
            />
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image
              src="/images/icons/whatsapp.svg"
              alt="WhatsApp"
              width={30}
              height={30}
              className="w-7"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
