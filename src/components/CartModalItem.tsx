import { ProductInCart } from "@/types/types";
import Image from "next/image";
import React from "react";

interface CartModalItemProps {
  product: ProductInCart;
}

export default function CartModalItem({ product }: CartModalItemProps) {
  return (
    <div className="flex justify-between items-center border-transparent border-b-gray-300 border-1">
      <div className="flex gap-4 items-center">
        <Image
          src={product.image.mobile.replace("./", "/")}
          alt={product.name}
          width={28}
          height={28}
          className="my-8"
        />
        <div>
          <p className="font-semibold">{product.name}</p>
          <p className="flex gap-x-3">
            <span className="text-red-700">{product.quantity}x</span>
            <span className="text-gray-400">${product.price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <div>
        <button>
          <span className="font-bold">
            ${(product.quantity * product.price).toFixed(2)}
          </span>
        </button>
      </div>
    </div>
  );
}
