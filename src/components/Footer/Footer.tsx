"use client";

import React from "react";

import Contacts from "./Contacts";

import "@/styles/Footer.scss";
import Notice from "./Notice";

const Footer: React.FC = () => {
  return (
    <footer>
      <h2 className="hidden-header">Дополнительная информация</h2>
      <div className="footer-wrap">
        <Contacts />
        <Notice />
      </div>
    </footer>
  );
};

export default Footer;
