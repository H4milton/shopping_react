import React from "react";
import { FiXCircle } from "react-icons/fi";
import { ProductInCart } from "@/types/types";

interface CartItemsProps {
  product: ProductInCart;
}

export default function CartItems({ product }: CartItemsProps) {
  return (
    <div className="flex justify-between items-center border-transparent border-b-gray-300 border-1">
      <div>
        <p className="font-semibold">{product.name}</p>
        <p className="flex gap-x-3">
          <span className="text-red-700">{product.quantity}x</span>
          <span className="text-gray-400">${product.price}</span>
          <span className="font-bold">${product.price * product.quantity}</span>
        </p>
      </div>
      <div>
        <button>
          <FiXCircle className="text-lg" />
        </button>
      </div>
    </div>
  );
}
