"use client";

import useCartStore from "@/store/useCartStore";
import Service from "@/types/Service";
import React, { useState, useEffect } from "react";

const CardButton: React.FC<{ service: Service }> = ({ service }) => {
  const isInCart = useCartStore((state) => state.isInCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Пока Zustand не инициализирован — ничего не рендерим
  // if (!hydrated) return null;

  return hydrated && isInCart(service.title) ? (
    <button
      onClick={() => removeFromCart(service.title)}
      className="w-full bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md"
    >
      Удалить из корзины
    </button>
  ) : (
    <button
      onClick={() => addToCart(service)}
      className="w-full px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-800 text-white"
    >
      Добавить в корзину
    </button>
  );
};

export default CardButton;
