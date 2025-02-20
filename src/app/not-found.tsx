"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <Image
        src="/page-not-found.png"
        alt="Страница не найдена"
        width={1024}
        height={1024}
        className="sm:w-[100%] md:w-[70%] lg:w-[50%] 2  xl:w-[30%] mb-6"
      />
      <h1>Страница не найдена</h1>
      <p className="text-lg text-gray-600 mb-6">
        Кажется, здесь ничего нет. Но мы можем почистить ваш диван!
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-800 transition"
      >
        На главную
      </Link>
    </div>
  );
}
