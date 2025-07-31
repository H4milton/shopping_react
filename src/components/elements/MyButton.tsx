import React from "react";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

//Este botón recibe una función desde el padre
export default function MyButton({ text, onClick, disabled }: MyButtonProps) {
  return (
    <button
      className="bg-red-500 text-white px-4 py-3 rounded-2xl mt-8 w-full transition-colors disabled:bg-red-300 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
