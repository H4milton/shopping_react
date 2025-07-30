import React from "react";
import CardProduct from "./CardProduct";
import { Product } from "../types/types";

interface CardContainerProps {
  products: Product[];
}

export default function CardContainer({ products }: CardContainerProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3 mb-6 w-[327px] md:w-[688px]">
      {products.map((product) => (
        <CardProduct key={product.name} product={product} />
      ))}
    </div>
  );
}
