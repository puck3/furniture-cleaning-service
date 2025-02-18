"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import useCartStore from "@/store/useCartStore";

const CartButton = () => {
  const cart = useCartStore((state) => state.cart);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || cart.length === 0) return null;

  const scrollToCart = () => {
    const cartElement = document.getElementById("cart");
    if (cartElement) {
      cartElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={scrollToCart}
        className="relative text-white flex items-center justify-center"
      >
        <Image
          src="/icons/cart.png"
          alt="cart"
          width={128}
          height={128}
          className="w-16"
        />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cart.length}
        </span>
      </button>
    </div>
  );
};

export default CartButton;
