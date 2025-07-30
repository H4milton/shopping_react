"use client";

import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Product, ProductInCart } from "../types/types";
import Image from "next/image";

type CardProductProps = {
  product: Product;
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (name: string) => void;
};

export default function CardProduct({
  product,
  addToCart,
  removeFromCart,
}: CardProductProps) {
  const [quantity, setQuantity] = useState(0);
  const stock = product.stock ?? 0;

  const isOutOfStock = stock === 0;
  // const isStockLimitReached = quantity >= stock;
  const handleIncrement = () => {
    if (quantity < stock) {
      addToCart({ ...product, quantity: 1 });
      setQuantity(quantity + 1);
    }
  };

  // const handleDecrement = () => {
  //   setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  // };
  const handleDecrement = () => {
    removeFromCart(product.name);
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col">
      <div className="relative inline-block">
        <picture>
          <source
            srcSet={product.image.desktop.replace("./", "/")}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={product.image.tablet.replace("./", "/")}
            media="(min-width: 768px)"
          />

          {/* Fallback para pantallas pequeñas (mobile) y para navegadores que no soportan <picture> */}
          <Image
            src={product.image.mobile.replace("./", "/")}
            alt={product.name}
            width={250}
            height={250}
            className={`w-full h-auto rounded-lg mb-6 transition-all duration-300 ${
              isOutOfStock ? "grayscale" : ""
            }`}
          />
        </picture>
        <div className="isolate absolute top-2 -right-2 text-sm font-bold text-rose-900">
          {/* Fondo borroso */}
          <div className="absolute inset-0 bg-white/80 rounded-lg blur-sm shadow-md"></div>
          {/* Contenido de texto */}
          <span className="relative block p-1 px-2">{stock} disponibles</span>
        </div>
        {quantity === 0 ? (
          <button
            className="flex gap-2 bg-white text-black text-sm w-40 p-2 rounded-full align-center justify-center border-1 absolute transform -translate-x-1/2 bottom-2 left-1/2 border-red-300 cursor-pointer hover:border-red-600 transition-colors
            disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed
            "
            onClick={handleIncrement}
            disabled={isOutOfStock}
          >
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
              className={`${isOutOfStock ? "grayscale" : ""}`}
            />
            <span>Add to cart</span>
          </button>
        ) : (
          <div className="flex gap-2 bg-red-400 text-black text-sm w-40 p-2 rounded-full align-center justify-between absolute transform -translate-x-1/2 bottom-2 left-1/2">
            <button
              className="cursor-pointer hover:bg-white rounded-full hover:text-orange-500 transition-colors duration-200"
              onClick={handleDecrement}
            >
              <FiMinusCircle className="text-lg" />
            </button>
            <span className="font-bold">{quantity}</span>
            <button
              className="cursor-pointer hover:bg-white rounded-full hover:text-orange-500 transition-colors duration-200"
              // onClick={handleIncrement}
              onClick={handleIncrement}
            >
              <FiPlusCircle className="text-lg" />
            </button>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600">{product.category}</p>
      <h3 className="font-semibold text-lg text-rose-900 mt-1">
        {product.name}
      </h3>
      <p className="text-red-600 font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
}
