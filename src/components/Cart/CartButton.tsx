"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import useCartStore from "@/store/CartStore";

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
    <div className="cart-button-wrap">
      <button onClick={scrollToCart} className="cart-button">
        <Image
          src="/icons/cart.png"
          alt="cart"
          width={128}
          height={128}
          className="icon"
        />
        <span className="indicator">{cart.length}</span>
      </button>
    </div>
  );
};

export default CartButton;
