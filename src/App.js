import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./context/ProductContext";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </>
  );
};

export default App;
