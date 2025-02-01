import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header
      className={`fixed top-0 w-full z-20 bg-blue-600 shadow-md ${className}`}
    >
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <ul className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-lg font-medium text-white">
          <li className="hover:text-gray-300 transition-colors">
            <a href="#services">Услуги и цены</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#gallery">Наши работы</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#order">Оставить заявку</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
