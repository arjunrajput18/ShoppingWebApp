import React from "react";

export const Filters = () => {
  return (
    <div className="filters">
      <form>
        <label>
          <input label="Ascending" name="group1" type="radio" />
          Ascending
        </label>
        <label>
          <input label="Descending" name="group1" type="radio" />
          Descending
        </label>

        <label>
          <input type="checkbox" name="group1" label="Include out of stock" />
          Include out of stock
        </label>

        <label>
          <input type="checkbox" name="group1" label="Fast Delivery Only" />
          Fast Delivery Only
        </label>
        <button className="btn">Clear Filters</button>
      </form>
    </div>
  );
};
