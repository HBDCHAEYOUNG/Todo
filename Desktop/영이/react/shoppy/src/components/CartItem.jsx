import React, { useEffect, useState } from "react";
import { IoTrash } from "react-icons/io5";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

export default function CartItem({ product, uid }) {
  const { image, title, price, options, quantity, id } = product;
  console.log(quantity);
  const [count, setCount] = useState(product);

  const formatPrice = (price) => {
    return price.toLocaleString("Ko-KR");
  };
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };
  const handleRemove = () => {
    removeFromCart(uid, id);
  };

  return (
    <li className="flex items-center pb-4">
      <img className="w-24 md:w-48 rounded-lg mr-4" src={image} />
      <div className="basis-3/5 ">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xl font-bold text-brand">{options}</p>
        <p className="font-semibold ">{formatPrice(price)}원</p>
      </div>
      <div className="flex items-center gap-2 text-2xl ml-auto">
        <AiOutlineMinusSquare
          onClick={handleMinus}
          className="cursor-pointer transition-all hover:text-brand hover:scale-105"
        />
        <p>{quantity}</p>
        <AiOutlinePlusSquare
          onClick={handlePlus}
          className="cursor-pointer transition-all hover:text-brand hover:scale-105"
        />
        <IoTrash
          onClick={handleRemove}
          className="cursor-pointer transition-all hover:text-brand hover:scale-105"
        />
      </div>
    </li>
  );
}
