import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContext";
import TodoList from "./TodoList";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const { addTodo, getTodos } = useContext(productContext);
  const handleClick = () => {
    if (!title) {
      return;
    }
    let newTodo = {
      todoTitle: title,
    };
    addTodo(newTodo);
    getTodos();
    setTitle("");
  };
  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-field">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleClick}>ADD</button>
          <label>TodoName</label>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default AddProduct;
