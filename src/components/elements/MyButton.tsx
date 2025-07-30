import React from "react";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}

//Este botón recibe una función desde el padre
export default function MyButton({ text, onClick }: MyButtonProps) {
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-lg mt-8 w-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
