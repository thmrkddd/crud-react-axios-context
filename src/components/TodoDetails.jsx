import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/ProductContext";

const TodoDetails = () => {
  const { id } = useParams();

  const { todoDetails, getTodoDetails } = useContext(productContext);
  useEffect(() => {
    getTodoDetails(id);
  }, []);
  return (
    <div>
      <h1>{todoDetails.todoTitle}</h1>
    </div>
  );
};

export default TodoDetails;
