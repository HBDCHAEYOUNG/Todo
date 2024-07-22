import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand text-white px-4 py-2 rounded-sm hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
