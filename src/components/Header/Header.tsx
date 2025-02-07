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
    <header className="fixed top-0 left-0 w-full z-20 bg-blue-600 shadow-md py-4 px-6">
      <div className="w-full flex items-center justify-between">
        {/* Логотип (скрывается на мобильных) */}
        <Logo />

        {/* Навигация (только для десктопа) */}
        <nav className="hidden md:flex flex-1 justify-center">
          <Nav />
        </nav>

        {/* Блок с телефоном и мессенджерами (для десктопа) */}
        <div className="hidden lg:flex items-center space-x-4">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
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

        {/* Телефон (по центру) и бургер-меню (только для мобильных) */}
        <div className="md:hidden flex-1 flex justify-center">
          <PhoneLink
            phoneNumber={PHONE_NUMBER}
            className="text-white text-lg font-semibold hover:text-gray-300 transition-colors"
          />
        </div>

        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/images/icons/menu.svg" alt="Меню" className="w-7 h-7" />
        </button>
      </div>

      {/* Сайдбар */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
