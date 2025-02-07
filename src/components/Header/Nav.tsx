"use client";

const Nav = () => {
  return (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg font-medium text-gray-800 md:text-white">
      <li className="hover:text-blue-600 md:hover:text-gray-300 transition-colors">
        <a href="#services">Услуги и цены</a>
      </li>
      <li className="hover:text-blue-600 md:hover:text-gray-300 transition-colors">
        <a href="#gallery">Наши работы</a>
      </li>
      <li className="hover:text-blue-600 md:hover:text-gray-300 transition-colors">
        <a href="#questions">Вопросы</a>
      </li>
      <li className="hover:text-blue-600 md:hover:text-gray-300 transition-colors">
        <a href="#contacts">Контакты</a>
      </li>
    </ul>
  );
};

export default Nav;
