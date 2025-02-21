"use client";

import useCartStore from "@/store/CartStore";
import CartItem from "./CartItem";

import "@/styles/Cart.scss";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

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
        <button className="button">Оформить заявку</button>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Cart;
