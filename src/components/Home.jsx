import React from "react";
import { Filters } from "./Filters";
import { CartState } from "../context/Context";

export const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="container">
      <Filters />
      <div className="innerContainer">
        {products.map((prod) => (
          <li className="innerlist">
            <img src={prod.image} alt="img" className="innerListImg" />
            <div className="innerInfo">  
            <h3>{prod.name}</h3>
            <h4>{prod.price}</h4>
            <h4>{prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}</h4>
            <button className="btn-add-to-cart">Add To Cart</button>
            </div>
          
          </li>
        ))}
      </div>
    </div>
  );
};
