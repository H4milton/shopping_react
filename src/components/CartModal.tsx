import React from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";
import CartModalItem from "./CartModalItem";
import MyButton from "./elements/MyButton";
import OrderTotal from "./elements/OrderTotal";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      open={open}
      onClick={handleBackdropClick}
      className="bg-black/50 w-full h-full  top-0 left-0 fixed z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-4 m-10 w-[400px] relative">
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
          <CartModalItem />
          <CartModalItem />
          <CartModalItem />
          <OrderTotal total={0} moneyFormat="$" />
        </div>
        <MyButton text="Start New Order" onClick={onClose} />
      </div>
    </dialog>
  );
}
