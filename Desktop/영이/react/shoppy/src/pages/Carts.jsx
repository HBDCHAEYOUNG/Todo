import React from "react";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import CartItem from "../components/CartItem";
import { useAuthContext } from "../context/AuthContext";
import PriceCard from "../components/PriceCard";
import { BsFill0CircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";

export default function Carts() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCart(uid),
  });
  if (isLoading) return <p>로딩중</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  console.log(totalPrice);
  return (
    <section className="p-8">
      <p className="text-2xl text-center font-bold pb-4">내 장바구니</p>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-200 mb-8 p-4 ">
            {products?.map((item) => (
              <CartItem key={item.id} product={item} uid={uid} />
            ))}
          </ul>
          <div className="flex justify-between items-center mb-8">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFill0CircleFill className="shrink-0" />
            <PriceCard text="배송액" price={3000} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + 3000} />
          </div>
          <Button className="w-full" text="주문하기" />
        </>
      )}
    </section>
  );
}
