import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { CartState } from "../context/Context";

export const Header = () => {
  
  const {state,productDispatch}=CartState()
  return (
    <>
      <div className="navbar ">
       <NavLink to="/" style={{textDecoration:"none" ,color:"white"}}><h2>SpeedyBuy </h2></NavLink> 
        <input type="text" placeholder="Search Here"  className="searchBox" onChange={(e)=>productDispatch({type: "SEARCH_TO_CART", payLoad:e.target.value})}/>
        <div className="cartList">
        <NavLink  to="/cart"  style={{textDecoration:"none" ,color:"white" }}> 
        <FiShoppingCart className="cartIcon"/>
        <span className="squareCart">{state.cart.length}</span>
        </NavLink>
        </div>
        
      </div>
    </>
  );
};
