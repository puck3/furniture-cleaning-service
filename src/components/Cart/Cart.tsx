"use client";

import useCartStore from "@/store/useCartStore";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="col-span-full p-5 border rounded-lg shadow-md bg-gray-100">
      <h2 className="text-xl font-semibold text-center mb-3">Корзина</h2>
      <ul>
        {cart.map((item) => (
          <CartItem title={item.title} key={item.title} />
        ))}
      </ul>

      <div className="flex flex-wrap justify-end gap-2 mt-5">
        <button
          onClick={clearCart}
          className="bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md"
        >
          Очистить корзину
        </button>
        <button className="px-4 py-2 rounded-md bg-fuchsia-600 hover:bg-fuchsia-800 text-white">
          Оформить заявку
        </button>
      </div>
    </div>
  );
};

export default Cart;
