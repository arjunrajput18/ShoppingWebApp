import React, { useState } from "react";
import { CartState } from "../context/Context";

export const Cart = () => {
  const [coupon,setCoupon]=useState(0)
  const [disabledBtn,setDisabledBtn]=useState(false)

  const {
    state: { cart},
    dispatch,
  } = CartState();


console.log(coupon,8)
const clickHandler=()=>{

 cart.length?setCoupon(coupon+5):setCoupon(coupon)
 cart.length?setDisabledBtn(true):setDisabledBtn(false)
}

const totalPrice=cart.reduce((acc,{price})=>acc+Number(price),0)

  return (
    <div>
  <h1>Total:{cart.length?totalPrice-coupon:0}</h1>
      <button className="btn-Coupon" onClick={clickHandler}  disabled={ cart.length?disabledBtn:false} style={{backgroundColor: cart.length && disabledBtn?"red":"#a21caf"}}>{cart.length && disabledBtn?"Applied coupon":"Apply coupon"}</button>
      {cart.length?<div className="cartContainer">
        {cart.map((prod) => (
          <>
            <div className="innerCart">
              <li>
                <img src={prod.image} alt="img" className="innerCartImg" />
                <h4>{prod.name}</h4>
                <h4>{prod.price}</h4>
                <h4>
                  {prod.fastDelivery ? "Fast Delivery" : "4 days delivery"}
                </h4>

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
      </div>:<h1 style={{marginTop:"15px"}}>Cart is Empty</h1>}
    </div>
  );
};
