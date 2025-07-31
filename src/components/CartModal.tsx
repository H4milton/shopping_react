import React from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";
import CartModalItem from "./CartModalItem";
import MyButton from "./elements/MyButton";
import OrderTotal from "./elements/OrderTotal";
import { ProductInCart } from "@/types/types";

interface CartModalProps {
  open: boolean;
  productsInCart: ProductInCart[];
  onClose: () => void;
  resetCart: () => void;
}

export default function CartModal({
  open,
  productsInCart,
  onClose,
  resetCart,
}: CartModalProps) {
  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //Calculamos total
  const total = productsInCart.reduce(
    (totalAc, product) => totalAc + product.price * product.quantity,
    0
  );

  const closeAndFinish = () => {
    onClose();
    resetCart();
    //window.location.reload();
  };

  return (
    <dialog
      open={open}
      onClick={handleBackdropClick}
      className="w-full h-full  top-0 left-0 fixed z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl p-8 m-10 w-[400px] relative border-gray-300/50 border-1">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
        >
          <FiX size={24} />
        </button>

        <FiCheckCircle className="text-green-500 text-4xl mb-4 top-2" />
        <h1 className="text-4xl font-bold">Order confirmation</h1>
        <p>We hope you enjoy your food!</p>
        <div className="p-5">
          {productsInCart.map((product) => (
            <CartModalItem key={product.name} product={product} />
          ))}
          <OrderTotal total={total} moneyFormat="$" />
        </div>
        <MyButton text="Start New Order" onClick={closeAndFinish} />
      </div>
    </dialog>
  );
}
