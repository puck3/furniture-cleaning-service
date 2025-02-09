"use client";

import { useState } from "react";
import Nav from "./Nav";
import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "../PhoneLink";
import SocialsIcon from "../SocialsIcon";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-fuchsia-600 shadow-md p-4">
      <div className="w-full flex items-center justify-between">
        <Logo />

        {/* lg */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <Nav
            className="text-xl font-medium text-white"
            listClassName="flex space-x-8"
          />
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-xl font-semibold"
          />
          <SocialsIcon
            src="/images/icons/telegram_white.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="w-7"
          />
          <SocialsIcon
            src="/images/icons/whatsapp_white.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-7"
          />
        </div>

        {/* md */}
        <div className="hidden md:flex lg:hidden flex-1 justify-center items-center space-x-4">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-2xl font-semibold"
          />
          <SocialsIcon
            src="/images/icons/telegram_white.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="w-7"
          />
          <SocialsIcon
            src="/images/icons/whatsapp_white.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-7"
          />
        </div>
        <button
          className="hidden md:flex lg:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/images/icons/menu.svg" alt="Меню" className="w-7 h-7" />
        </button>

        {/* sm */}
        <div className="md:hidden flex-1 flex justify-center">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-2xl font-semibold"
          />
        </div>
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/images/icons/menu.svg" alt="Меню" className="w-7 h-7" />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
