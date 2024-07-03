import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState();
  const inputRef = useRef(null);
  const handleChange = () => {
    const value = inputRef.current.value;
    setText(value);
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    //공백 제거 조건 예시 text.trim().length===0
    onAdd({ id: uuidv4(), text, status: "active" });
    inputRef.current.value = "";
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add Text"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
