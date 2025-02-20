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

  return hydrated && isInCart(service.title) ? (
    <button
      onClick={() => removeFromCart(service.title)}
      className="button-grey"
    >
      Удалить из корзины
    </button>
  ) : (
    <button onClick={() => addToCart(service)} className="button">
      Добавить в корзину
    </button>
  );
};

export default CardButton;
