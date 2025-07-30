import React from "react";
import { FiXCircle } from "react-icons/fi";

export default function CartItems() {
  return (
    <div className="flex justify-between items-center border-transparent border-b-gray-300 border-1">
      <div>
        <p className="font-semibold">Product Name</p>
        <p className="flex gap-x-3">
          <span className="text-red-700">2x</span>
          <span className="text-gray-400">$1.00</span>
          <span className="font-bold">$2.00</span>
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
