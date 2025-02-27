"use client";

import Cart from "@/components/Cart/Cart";
import CartButton from "@/components/Cart/CartButton";
import ExamplesGallery from "@/components/ExamplesGallery/ExamplesGallery";
import FAQ from "@/components/FAQ";
import ServiceInfo from "@/components/Info/Info";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main>
      <h1 id="main">Профессиональная химчистка мебели</h1>
      <p className="hero-subtitle">
        Чистая мебель — залог здоровья и комфорта!
      </p>
      <ServiceInfo />
      <ServicesList />
      <Cart />
      <CartButton />
      <ExamplesGallery />
      <FAQ />
    </main>
  );
}
