"use client";

import Link from "next/link";

interface NavProps {
  className?: string;
  listClassName?: string;
  linkClassName?: string;
  items?: { href: string; label: string }[];
}

const defaultItems = [
  { href: "/#services", label: "Услуги и цены" },
  { href: "/#gallery", label: "Наши работы" },
  { href: "/#questions", label: "Вопросы" },
  { href: "/#contacts", label: "Контакты" },
];

const Nav: React.FC<NavProps> = ({
  className = "",
  listClassName = "",
  linkClassName = "",
  items = defaultItems,
}) => {
  return (
    <nav className={className}>
      <ul className={listClassName}>
        {items.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={linkClassName}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
