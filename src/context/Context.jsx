import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { CartReducer } from "./Reducers";

export const Cart = createContext({});
faker.seed(99);

export const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });


  console.log(state.cart);
  return (
    <Cart.Provider value={{  state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState=()=>{
  return useContext(Cart)
  }