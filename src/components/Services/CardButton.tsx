"use client";

import useCartStore from "@/store/useCartStore";
import Service from "@/types/Service";
import { useShallow } from "zustand/shallow";

const CardButton: React.FC<{ service: Service }> = ({ service }) => {
  const { cart, addToCart, removeFromCart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
    }))
  );

  const isInCart = cart.some((item) => item.title === service.title);

  return isInCart ? (
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
