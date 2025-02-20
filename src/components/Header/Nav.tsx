"use client";

import Link from "next/link";

import NavProps from "@/types/NavProps";

const defaultItems = [
  { href: "/#services", label: "Услуги и цены" },
  { href: "/#gallery", label: "Наши работы" },
  { href: "/#questions", label: "Вопросы" },
  { href: "/#contacts", label: "Контакты" },
];

const Nav: React.FC<NavProps> = ({
  className = "",
  textClassName = "",
  items = defaultItems,
}) => {
  return (
    <nav className={className}>
      {items.map(({ href, label }) => (
        <Link key={href} href={href} className={textClassName}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
