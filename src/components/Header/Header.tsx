"use client";

import { useState } from "react";
import Nav from "./Nav";
import { PHONE_NUMBER } from "@/data/constants";
import PhoneLink from "../PhoneLink";
import SocialsIcon from "../SocialsIcon";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

import "@/styles/Header.scss";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-wrap">
        <Logo />
        <Nav className="lg-nav" />
        <div className="socials-wrap">
          <PhoneLink phoneNumber={PHONE_NUMBER} className="phone-semibold" />
          <SocialsIcon
            src="/icons/socials/telegram_white.svg"
            alt="Telegram"
            href={`https://t.me/${PHONE_NUMBER}`}
            className="socials-icon"
          />
          <SocialsIcon
            src="/icons/socials/whatsapp_white.svg"
            alt="WhatsApp"
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="socials-icon"
          />
        </div>
        <button
          className="sidebar-button"
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src="/icons/menu.svg" alt="Меню" className="menu-icon" />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
