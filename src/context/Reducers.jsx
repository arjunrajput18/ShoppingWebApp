export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_To_CART":
      return {...state,cart:[...state.cart,action.payLoad]};
      case "REMOVE_FROM_CART":
        return {...state,cart:state.cart.filter((p)=>action.payLoad.id!==p.id)}
    default:
      return state;
  }
};
