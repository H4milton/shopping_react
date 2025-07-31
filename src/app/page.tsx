"use client";

import CardContainer from "@/components/CardContainer";
import products from "../../data.json";
import Cart from "@/components/Cart";
import CartModal from "@/components/CartModal";
import { ProductInCart, Product } from "@/types/types";

import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const addToCart = (product: Product) => {
    setProductsInCart((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const dismFromCart = (name: string) => {
    setProductsInCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name: string) => {
    // dismFromCart(name);
    // setTimeout(() => {
    //   setProductsInCart((prev) =>
    //     prev.filter((item) => item.name !== name)
    //   );
    // }, 1000);
    setProductsInCart((prev) => prev.filter((item) => item.name !== name));
  };

  const resetCart = () => {
    setProductsInCart([]);
  };

  return (
    <main className="items-center px-6 md:px-12 lg:px-32">
      <h1 className="w-full text-4xl font-bold text-left mb-10">Mi Tienda</h1>

      <div className="lg:flex lg:gap-x-8 lg:items-start">
        <CardContainer
          products={products}
          productsInCart={productsInCart}
          addToCart={addToCart}
          dismFromCart={dismFromCart}
        />
        <Cart
          onConfirmOrder={handleOpenModal}
          productsInCart={productsInCart}
          removeFromCart={removeFromCart}
        />
        <CartModal
          open={isModalOpen}
          productsInCart={productsInCart}
          onClose={handleCloseModal}
          resetCart={resetCart}
        />
      </div>
    </main>
  );
}
