import React from "react";
import CardProduct from "./CardProduct";
import { Product, ProductInCart } from "../types/types";
import { useCartStore } from "../store/cart.store";

interface CardContainerProps {
  products: Product[];
  // productsInCart: ProductInCart[];
  // addToCart: (product: ProductInCart) => void;
  // dismFromCart: (name: string) => void;
}

export default function CardContainer({
  products,
}: // productsInCart,
// addToCart,
// dismFromCart,
CardContainerProps) {
  const productsInCart = useCartStore((state) => state.productsInCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const dismFromCart = useCartStore((state) => state.dismFromCart);

  return (
    <div className="grid gap-8 md:grid-cols-3 mb-6 w-[327px] md:w-[688px]">
      {products.map((product) => {
        const itemInCart = productsInCart.find((p) => p.name === product.name);
        const quantityInCart = itemInCart?.quantity ?? 0;

        return (
          <CardProduct
            key={product.name}
            product={product}
            quantity={quantityInCart}
            addToCart={addToCart}
            dismFromCart={dismFromCart}
          />
        );
      })}
    </div>
  );
}

// export function CardContainer1({
//   products,
//   productsInCart,
//   addToCart,
//   removeFromCart,
// }: CardContainerProps) {
//   return (
//     <div className="grid gap-8 md:grid-cols-3 mb-6 w-[327px] md:w-[688px]">
//       {products.map((product) => (
//         //const itemInCart = productsInCart.find((p) => p.name === product.name);
//         //const quantityInCart = itemInCart?.quantity ?? 0;

//         <CardProduct
//           key={product.name}
//           product={product}
//           quantity={quantityInCart}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//         />
//       ))}
//     </div>
//   );
// }
