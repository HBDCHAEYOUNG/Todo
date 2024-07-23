import React from "react";

export default function Button({ text, onClick, className }) {
  return (
    <button
      className={`bg-brand text-white px-4 py-2 rounded-sm hover:brightness-110 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
