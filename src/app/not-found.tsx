"use client";

import Image from "next/image";
import Link from "next/link";

import "@/styles/not-found.scss";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <Image
        src="/page-not-found.png"
        alt="Страница не найдена"
        width={1024}
        height={1024}
        className="image-404"
      />
      <h1>Страница не найдена</h1>
      <p>Кажется, здесь ничего нет. Но мы можем почистить ваш диван!</p>
      <Link href="/" className="button">
        На главную
      </Link>
    </main>
  );
}
