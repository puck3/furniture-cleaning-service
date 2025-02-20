"use client";

import React from "react";

import Contacts from "./Contacts";

import "@/styles/Footer.scss";
import CopyrightNotice from "./CopyrightNotice";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <Contacts />
        <CopyrightNotice />
      </div>
    </footer>
  );
};

export default Footer;
