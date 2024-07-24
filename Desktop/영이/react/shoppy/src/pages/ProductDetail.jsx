import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  // const {
  //   state: { product },
  // } = useLocation();
  const location = useLocation();
  const { product } = location.state || {};
  console.log(product);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { image, title, category, price, description, options } = product;

  return (
    <section>
      <div>
        <p>{category}</p>
        <img src={image} alt="title" />
      </div>

      <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <p>{description}</p>
        <label htmlFor="options">Options:</label>
        <select id="options" multiple className="block mt-2 p-2 border rounded">
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
