"use client";

import React from "react";

import Contacts from "./Contacts";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 text-white p-2">
      <div className="max-w-[90%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] mx-auto">
        <Contacts />
        <section className="py-4 text-center ">
          <p className="text-sm">Все права защищены 2025 ©</p>
          <p className="text-xs text-gray-400 mt-2">
            Информация на сайте не является публичной офертой.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
