"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-6">
      <div className="w-full mt-4 sm:mt-0 text-center ">
        <p className="text-sm">Все права защищены 2025 ©</p>
        <p className="text-xs text-gray-400 mt-2">
          Информация на сайте не является публичной офертой.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
