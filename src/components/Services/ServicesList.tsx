"use client";

import useCartStore from "@/store/useCartStore";
import ServiceCard from "@/components/Services/ServiceCard";
import services from "@/data/services";
import Cart from "../Cart/Cart";

const ServicesList = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
      {cart.length > 0 && <Cart />}
    </div>
  );
};

export default ServicesList;
