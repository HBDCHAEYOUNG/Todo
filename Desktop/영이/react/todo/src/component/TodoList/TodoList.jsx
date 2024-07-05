import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import getFilteredItem from "../../lib/getFilteredItem";
import readTodoFromLocalStroage from "../../lib/readTodoFromLocalStroage";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodoFromLocalStroage);

  //readTodoFromLocalStroage() <-usestate 매번 호출됨

  //아래 셋 모두 같은 의미, 1회 호출
  //readTodoFromLocalStroage
  //()=>readTodoFromLocalStroage()
  //function(){return readTodoFromLocalStroage()}
  //타입스크립트 제네릭 공부!

  const handleAdd = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  };
  const handleDelete = (deleted) => {
    setTodos((todos) => todos.filter((item) => item.id !== deleted.id));
  };

  // const [showTodos, setShowTodos] = useState([]);
  // useEffect(() => {
  //   setShowTodos(todos.filter(({ status }) => filter !== status));
  // }, [todos, filter]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItem(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
