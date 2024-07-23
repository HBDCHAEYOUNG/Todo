import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-4 items-center"
      >
        <span className="text-center">새로운 제품 등록</span>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="local file"
            className="max-w-56 "
          />
        )}
        <Input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션들((,)로구분)"
          onChange={handleChange}
        />

        <Button className="w-full" text="제품 등록하기" />
      </form>
    </section>
  );
}
