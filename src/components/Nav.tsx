const Nav = () => {
  return (
    <div className="flex-1 flex justify-center">
      <nav>
        <ul className="flex space-x-8 text-lg font-medium text-white">
          <li className="hover:text-gray-300 transition-colors">
            <a href="#services">Услуги и цены</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#gallery">Наши работы</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#contacts">Контакты</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#questions">Вопросы</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
