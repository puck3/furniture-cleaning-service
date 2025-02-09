"use client";

interface NavProps {
  className?: string;
  listClassName?: string;
  linkClassName?: string;
  items?: { href: string; label: string }[];
}

const Nav: React.FC<NavProps> = ({
  className = "",
  listClassName = "",
  linkClassName = "",
  items = [
    { href: "#services", label: "Услуги и цены" },
    { href: "#gallery", label: "Наши работы" },
    { href: "#questions", label: "Вопросы" },
    { href: "#contacts", label: "Контакты" },
  ],
}) => {
  return (
    <nav className={className}>
      <ul className={listClassName}>
        {items.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={linkClassName}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
