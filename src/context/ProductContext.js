import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:8000/todos";

  const INIT_STATE = {
    todos: [],
    todoDetails: {},
  };

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return { ...state, todos: action.payload };
      case "GET_TODO_DETAILS":
        return { ...state, todoDetails: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! Функция получения данных из db.json

  const getTodos = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };

  // ! Функция добавления
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //! Функция удаления
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };
  //! функция редактирования
  const editTodo = async (id, newEditedTodo) => {
    await axios.patch(`${API}/${id}`, newEditedTodo);
  };
  // ! функция получения данных об одной тудушки (details)
  const getTodoDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: "GET_TODO_DETAILS",
      payload: data,
    });
  };

  return (
    <productContext.Provider
      value={{
        addTodo,
        todos: state.todos,
        todoDetails: state.todoDetails,
        getTodos,
        deleteTodo,
        getTodoDetails,
        editTodo,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
