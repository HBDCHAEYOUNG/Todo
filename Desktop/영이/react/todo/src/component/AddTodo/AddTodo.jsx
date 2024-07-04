import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState();
  const inputRef = useRef(null);
  const handleChange = () => {
    const value = inputRef.current.value;
    setText(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value || inputRef.current.value.trim().length === 0)
      return;
    //공백 제거 조건 예시 text.trim().length===0
    onAdd({ id: uuidv4(), text, status: "active" });
    inputRef.current.value = "";
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          placeholder="Add Text"
          onChange={handleChange}
        />
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
