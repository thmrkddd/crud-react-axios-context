import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContext";

const EditProduct = () => {
  const { id } = useParams();
  const { editTodo, todoDetails, getTodoDetails } = useContext(productContext);
  const [title, setTitle] = useState(todoDetails.todoTitle);
  useEffect(() => {
    getTodoDetails(id);
  }, []);
  useEffect(() => {
    if (todoDetails && todoDetails.todoTitle) {
      setTitle(todoDetails.todoTitle);
    }
  }, [todoDetails]);
  const handleClick = () => {
    if (!title) {
      return;
    }
    let newTodo = {
      todoTitle: title,
    };
    editTodo(id, newTodo);
  };
  return (
    <div>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Link to={"/add"}>
        <button onClick={handleClick}>Сохранить</button>
      </Link>
    </div>
  );
};

export default EditProduct;
