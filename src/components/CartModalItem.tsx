import Image from "next/image";
import React from "react";

export default function CartModalItem() {
  return (
    <div className="flex justify-between items-center border-transparent border-b-gray-300 border-1">
      <div className="flex gap-4 items-center">
          <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="An illustration of an empty shopping basket."
            width={28}
            height={28}
            className="my-8"
          />
        <div>
          <p className="font-semibold">Product Name</p>
          <p className="flex gap-x-3">
            <span className="text-red-700">2x</span>
            <span className="text-gray-400">$1.00</span>
          </p>
        </div>
      </div>
      <div>
        <button>
          <span className="font-bold">$2.00</span>
        </button>
      </div>
    </div>
  );
}
