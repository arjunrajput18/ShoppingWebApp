import React from "react";
import { CartState } from "../context/Context";
import { Ratings } from "./Rating";

export const Filters = () => {
const {productDispatch,productState: {sort,searchWithOutOfStock,searchByFastDelievery,byRating}}=CartState()

const clearHandler=(e)=>{
  e.preventDefault()
 productDispatch({type:"CLEAR_FILTERS"})
}
const handleRatingClick = (i) => productDispatch({ type: "SEARCH_BY_RATING", payload: i })
  return (
    <div className="filters">
      <form>
        <label>
          <input  name="sortByPrice" type="radio" onChange={()=>productDispatch({type:"SORT_BY_PRICE",payLoad:"LowToHigh"})}  checked={sort==="LowToHigh" ?true:false}/>
          Low To High
        </label>
        <label>
          <input  name="sortByPrice" type="radio" onChange={()=>productDispatch({type:"SORT_BY_PRICE" ,payLoad:"HighToLow"})}   checked={sort==="HighToLow"?true:false} />
          High To Low
        </label>

        <label>
          <input type="checkbox" name="group1" label="Include out of stock" onChange={() => productDispatch({ type: "SEARCH_BY_STOCK" })} checked={searchWithOutOfStock} />
          Include out of stock
        </label>

        <label>
          <input type="checkbox" name="group1" label="Fast Delivery Only" onChange={() => productDispatch({ type: "SEARCH_BY_FAST_DELIEVERY" })} checked={searchByFastDelievery}  />
          Fast Delivery Only
        </label>
          <label>
        Ratings: <Ratings rating={byRating} handleRatingClick={handleRatingClick} /></label>
        <button className="btn" onClick={clearHandler}>Clear Filters</button>
      </form>
    </div>
  );
};
