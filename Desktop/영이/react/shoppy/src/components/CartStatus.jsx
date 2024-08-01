import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: product },
  } = useCart();

  return (
    <div className="relative">
      <FaShoppingCart className="text-4xl w-full" />
      {product && (
        <p className="w-6 h-6 text-center  absolute bg-brand text-white rounded-full -top-1 -right-2">
          {product.length}
        </p>
      )}
    </div>
  );
}
