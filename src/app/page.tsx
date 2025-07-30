"use client";

import CardContainer from "@/components/CardContainer";
import products from "../../data.json";
import Cart from "@/components/Cart";
import CartModal from "@/components/CartModal";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="items-center px-6 md:px-12 lg:px-32">
      <h1 className="w-full text-4xl font-bold text-left mb-10">My shop</h1>

      <div className="lg:flex lg:gap-x-8 lg:items-start">
        <CardContainer products={products} />
        <Cart onConfirmOrder={handleOpenModal} />
        <CartModal open={isModalOpen} onClose={handleCloseModal} />
      </div>
    </main>
  );
}
