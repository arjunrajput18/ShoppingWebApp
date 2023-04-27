import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="navbar ">
       <NavLink to="/" style={{textDecoration:"none" ,color:"white"}}><h2>Shopping Cart</h2></NavLink> 
        <input type="text" placeholder="Search Here"  className="searchBox"/>
        <NavLink  to="/cart"  style={{textDecoration:"none" ,color:"white" }}> <FiShoppingCart className="cartIcon"/></NavLink>
      </div>
    </>
  );
};
