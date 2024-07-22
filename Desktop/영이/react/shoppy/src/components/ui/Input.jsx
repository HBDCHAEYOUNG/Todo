import React from "react";

export default function Input({ type, placeholder, accept, onChange, name }) {
  return (
    <>
      <input
        type={type}
        accept={accept}
        placeholder={placeholder}
        name={name}
        required
        onChange={onChange}
        className="w-full p-2 border border-gray-400 "
      />
    </>
  );
}
