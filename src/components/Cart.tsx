import React, { use, useState } from "react";
import Image from "next/image";
import CartItems from "./CartItems";
import OrderTotal from "./elements/OrderTotal";
import MyButton from "./elements/MyButton";
import { ProductInCart } from "@/types/types";
import { useCartStore } from "@/store/cart.store";

// interface CartProps {
//   // onConfirmOrder: () => void;
//   // productsInCart: ProductInCart[];
//   // removeFromCart: (name: string) => void;
// }

export default function Cart(
  {
    // onConfirmOrder,
    // productsInCart,
    // removeFromCart,
  }
) {
  // const total = productsInCart.reduce(
  //   (totalAc, product) => totalAc + product.price * product.quantity,
  //   0
  // );

  const productsInCart = useCartStore((state) => state.productsInCart);
  const removeFromCart = useCartStore((state) => state.dismFromCart);
  const total = useCartStore((state) => state.total);

  const { toggleModal } = useCartStore();

  const quantityProducts = productsInCart.length;

  return (
    <>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:w-[400px] self-start">
        <h2 className="text-xl font-bold w-full text-left mb-8">
          Tu Carrito ({quantityProducts})
        </h2>

        {productsInCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/assets/images/illustration-empty-cart.svg"
              alt="An illustration of an empty shopping basket."
              width={128}
              height={128}
            />
            <small>Los artículos que agregues aparecerán aquí</small>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mb-10">
            {productsInCart.map((product) => (
              <CartItems
                key={product.name}
                product={product}
                removeFromCart={removeFromCart}
              />
              //SUmamos total
            ))}
          </div>
        )}

        <OrderTotal total={total} moneyFormat="$" />
        <MyButton
          text="Confirmar Pedido"
          onClick={toggleModal}
          disabled={total === 0}
        />
      </div>
    </>
  );
}
