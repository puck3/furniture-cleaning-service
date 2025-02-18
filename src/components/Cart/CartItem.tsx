"use client";

import useCartStore from "@/store/useCartStore";
import React from "react";

const CartItem: React.FC<{ title: string }> = ({ title }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className="flex justify-between items-center border-b py-2">
      <span>{title}</span>
      <button
        onClick={() => removeFromCart(title)}
        className="text-red-600 hover:underline"
      >
        Удалить
      </button>
    </li>
  );
};

export default CartItem;
