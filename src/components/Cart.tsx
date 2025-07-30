import React from "react";
import Image from "next/image";
import CartItems from "./CartItems";
import OrderTotal from "./elements/OrderTotal";
import MyButton from "./elements/MyButton";

interface CartProps {
  onConfirmOrder: () => void;
}

export default function Cart({ onConfirmOrder }: CartProps) {
  return (
    <>
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col lg:w-[400px] self-start">
        <h2 className="text-xl font-bold w-full text-left mb-8">
          Your Cart (0)
        </h2>

        {/* 
        <Image
          src="/assets/images/illustration-empty-cart.svg"
          alt="An illustration of an empty shopping basket."
          width={128}
          height={128}
          className="my-8"
        />
        <small>Your added items will appear here</small> */}
        <div className="flex flex-col gap-4 mb-10">
          <CartItems />
          <CartItems />
          <CartItems />
        </div>

        <OrderTotal total={20} moneyFormat="$" />
        <MyButton text="Confirm Order" onClick={onConfirmOrder} />
      </div>
    </>
  );
}
