"use client";

import Cart from "@/components/Cart/Cart";
import CartButton from "@/components/Cart/CartButton";
import ExamplesGallery from "@/components/ExamplesGallery";
import FAQ from "@/components/FAQ";
import ServiceInfo from "@/components/Info/Info";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
  return (
    <main>
      <ServiceInfo />
      <ServicesList />
      <Cart />
      <CartButton />
      <ExamplesGallery />
      <FAQ />
    </main>
  );
}
