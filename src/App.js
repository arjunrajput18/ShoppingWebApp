import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./styles.css"
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
