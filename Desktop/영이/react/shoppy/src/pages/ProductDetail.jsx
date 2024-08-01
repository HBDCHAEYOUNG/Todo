import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { addOrUpdateToCart } from "../api/firebase";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = (e) => {
    const product = {
      id,
      image,
      title,
      price,
      options: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  // return new Intl.NumberFormat().format(price);
  const formatPrice = (price) => {
    return price.toLocaleString("ko-KR");
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={image} alt="title" />

        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className=" text-2xl font-semibold border-b py-2">
            {formatPrice(price)}원
          </p>
          <p className="py-4 text-lg">{description}</p>

          <div className="flex items-center">
            <label htmlFor="options" className="text-brand font-semibold ">
              옵션 :{" "}
            </label>
            <select
              onChange={handleSelect}
              id="options"
              className="block m-4 p-2  border-dashed border-2 border-brand rounded flex-1 outline-none"
            >
              {options.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          {success && <p className="m-2 text-center">🧺 {success} 🧺</p>}
          <Button onClick={handleClick} text="제품 등록하기" />
        </div>
      </section>
    </>
  );
}
