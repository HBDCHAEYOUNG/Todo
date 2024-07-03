import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 0, text: "안녕하세요", status: "active" },
    { id: 1, text: "감사해요", status: "active" },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
