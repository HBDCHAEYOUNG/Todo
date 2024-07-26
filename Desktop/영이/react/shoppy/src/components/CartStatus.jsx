import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: product } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });
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
