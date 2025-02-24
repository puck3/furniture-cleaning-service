"use client";

import useCartStore from "@/store/CartStore";
import CartItem from "./CartItem";

import "@/styles/Cart.scss";
import { useState } from "react";
import Form from "../Form/Form";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return cart.length > 0 ? (
    <section id="cart" className="cart">
      <h1>Корзина</h1>
      <ul>
        {cart.map((item) => (
          <CartItem title={item.title} key={"cart item " + item.title} />
        ))}
      </ul>

      <div className="cart-buttons-wrap">
        <button onClick={clearCart} className="button-grey">
          Очистить корзину
        </button>
        <button onClick={openForm} className="button">
          Оформить заявку
        </button>
      </div>

      <Form isOpen={isFormOpen} closeForm={closeForm} />
    </section>
  ) : (
    <></>
  );
};

export default Cart;
