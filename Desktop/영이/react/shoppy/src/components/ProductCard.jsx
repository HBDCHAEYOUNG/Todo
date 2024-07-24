import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const { id, image, title, category, price } = product;

  const formatPrice = (price) => {
    // return new Intl.NumberFormat().format(price);
    return price.toLocaleString("ko-KR");
  };

  return (
    <li
      onClick={() => navigate(`/product/${id}`, { state: { product } })}
      className="rounded-sm overflow-hidden shadow-md cursor-pointer"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex justify-between p-2 font-semibold">
        <h3 className="truncate">{title}</h3>
        <p>{formatPrice(price)}</p>
      </div>
      <p className="px-2 pb-2 text-gray-600">{category}</p>
    </li>
  );
}
