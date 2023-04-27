import React from "react";
import { Filters } from "./Filters";
import { CartState } from "../context/Context";
import { SingleProduct } from "./SingleProduct";

export const Home = () => {
  const {
    state: { products },

  } = CartState();
  console.log(products);
  return (
    <div className="container">
      <Filters />
      <div className="innerContainer">
        {products.map((prod) => <SingleProduct prod={prod}/>)}
      </div>
    </div>
  );
};
