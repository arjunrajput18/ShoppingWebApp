import React from "react";

import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <>
      <div className="navbar ">
        <h2>Shopping Cart</h2>
        <input type="text" placeholder="Search Here"  className="searchBox"/>
        <FiShoppingCart />
      </div>
    </>
  );
};
