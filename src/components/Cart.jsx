import React from "react";
import { CartState } from "../context/Context";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="cartContainer">
      {cart.map((prod) => (
        <>
          <div className="innerCart">
            <li>
              <img src={prod.image} alt="img" className="innerCartImg" />
              <h4>{prod.name}</h4>
              <h4>{prod.price}</h4>
              <h4>{prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}</h4>

              <button
                className="btn-remove-from-cart"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payLoad: prod })
                }
              >
                Remove From Cart
              </button>
            </li>
          </div>
        </>
      ))}
    </div>
  );
};
