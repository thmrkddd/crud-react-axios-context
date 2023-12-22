import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, getTodos } = useContext(productContext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <ul>
        {todos.map((elem) => (
          <TodoItem {...elem} key={elem.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
