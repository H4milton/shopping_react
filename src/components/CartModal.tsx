import React from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";
import CartModalItem from "./CartModalItem";
import MyButton from "./elements/MyButton";
import OrderTotal from "./elements/OrderTotal";
import { ProductInCart } from "@/types/types";
import { toast } from "sonner";
import { useCartStore } from "@/store/cart.store";

// interface CartModalProps {
//   // open: boolean;
//   // productsInCart: ProductInCart[];
//   // // onClose: () => void;
//   // resetCart: () => void;
// }

export default function CartModal(
  {
    // open,
    // productsInCart,
    // onClose,
    // resetCart,
  }
) {
  const productsInCart = useCartStore((state) => state.productsInCart);
  const total = useCartStore((state) => state.total);
  const resetCart = useCartStore((state) => state.resetCart);
  const { modaIsOpen, toggleModal } = useCartStore();

  if (!modaIsOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      // onClose();
      toggleModal();
    }
  };

  //Calculamos total
  // const total = productsInCart.reduce(
  //   (totalAc, product) => totalAc + product.price * product.quantity,
  //   0
  // );

  const closeAndFinish = () => {
    // onClose();
    toggleModal();
    resetCart();

    toast("¡Orden finalizada con éxito!", {
      description: "Tu pedido se ha enviado exitosamente 🚴‍♂️",
      action: {
        label: "Aceptar",
        onClick: () => {
          // // lógica para revertir el pedido
          // toast.error("El pedido ha sido cancelado");
          // console.log("Pedido cancelado");
        },
      },
      duration: 6000, // opcional: cuánto tiempo permanece visible
    });
  };

  return (
    <dialog
      open={modaIsOpen}
      onClick={handleBackdropClick}
      className="w-full h-full  top-0 left-0 fixed z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl p-8 m-10 w-[400px] relative shadow-2xl">
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
        >
          <FiX size={24} />
        </button>

        <FiCheckCircle className="text-green-500 text-4xl mb-4 top-2" />
        <h1 className="text-4xl font-bold">Confirmar Orden</h1>
        <p>Esperamos que disfrutes de tu comida!</p>
        <div className="p-5">
          {productsInCart.map((product) => (
            <CartModalItem key={product.name} product={product} />
          ))}
          <OrderTotal total={total} moneyFormat="$" />
        </div>
        <MyButton
          text="Finalizar Pedido"
          onClick={closeAndFinish}
          disabled={total === 0}
        />
      </div>
    </dialog>
  );
}
