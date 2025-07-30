import React from "react";
import CardProduct from "./CardProduct";
import { Product, ProductInCart } from "../types/types";

interface CardContainerProps {
  products: Product[];
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (name: string) => void;
}

export default function CardContainer({
  products,
  addToCart,
  removeFromCart,
}: CardContainerProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3 mb-6 w-[327px] md:w-[688px]">
      {products.map((product) => (
        <CardProduct
          key={product.name}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}
