import React from "react";

interface OrderTotalProps {
  total: number;
  moneyFormat: string;
}

export default function OrderTotal({ total, moneyFormat }: OrderTotalProps) {
  return (
    <div className="flex items-baseline justify-between p-4">
      <p>Total orden</p>
      <p className="font-bold text-2xl">
        {moneyFormat}
        {total.toFixed(2)}
      </p>
    </div>
  );
}
