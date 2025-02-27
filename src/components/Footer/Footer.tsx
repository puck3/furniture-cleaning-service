"use client";

import React from "react";

import Contacts from "./Contacts";

import "@/styles/Footer.scss";
import CopyrightNotice from "./CopyrightNotice";

const Footer: React.FC = () => {
  return (
    <footer>
      <h2 className="hidden">Дополнительная информация</h2>
      <div className="footer-wrap">
        <Contacts />
        <CopyrightNotice />
      </div>
    </footer>
  );
};

export default Footer;
