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


export const productReducer=(state,action)=>{
  switch(action.type){
    case "SEARCH_BY_STOCK":
      return {...state,searchWithOutOfStock:!state.searchWithOutOfStock}
      
      case "SEARCH_BY_FAST_DELIEVERY": 
      return { ...state, searchByFastDelievery: !state.searchByFastDelievery }

    case "SORT_BY_PRICE":
      return {...state,sort:action.payLoad}
      case "SEARCH_TO_CART":
        return{...state,SearchValue: action.payLoad}

      case "CLEAR_FILTERS":
        return {
          searchWithOutOfStock:false,
          searchByFastDelievery:false,
          sort:"",
          SearchValue:"",
          byRating:0
        }
      case "SEARCH_BY_RATING":
        return { ...state, byRating: action.payload }
      default:
        return state
  }
}


