import React from "react";
import { CartState } from "../context/Context";

export const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <li className="innerlist">
        <img src={prod.image} alt="img" className="innerListImg" />
        <div className="innerInfo">
          <h4>{prod.name}</h4>
          <h4>{prod.price}</h4>
          <h4>{prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}</h4>
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="btn-remove-from-cart"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payLoad: prod })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn-add-to-cart"
              onClick={() => dispatch({ type: "ADD_To_CART", payLoad: prod })}
            >
              Add To Cart
            </button>
          )}
        </div>
      </li>
    </>
  );
};
