"use client";

import useCartStore from "@/store/CartStore";
import React from "react";

const CartItem: React.FC<{ title: string }> = ({ title }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <li className="cart-item">
      <span>{title}</span>
      <button onClick={() => removeFromCart(title)} className="delete-item">
        Удалить
      </button>
    </li>
  );
};

export default CartItem;
