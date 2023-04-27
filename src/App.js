import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import "./styles.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
