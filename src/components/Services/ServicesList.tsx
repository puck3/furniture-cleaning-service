"use client";

import useCartStore from "@/store/useCartStore";
import ServiceCard from "@/components/Services/ServiceCard";
import services from "@/data/services";
import Cart from "../Cart/Cart";

import "@/styles/Services.scss";

const ServicesList = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <section id="services">
      <h1>Наши услуги</h1>
      <div className="service-cards-wrap">
        {services.map((service) => (
          <ServiceCard key={"card " + service.title} service={service} />
        ))}
        {cart.length > 0 && <Cart />}
      </div>
    </section>
  );
};

export default ServicesList;
