import React from 'react';

function SortComponent({ setSort }) {
  return (
    <select onChange={(e) => setSort(e.target.value)}>
      <option value="rating">Sort by Rating</option>
      <option value="price">Sort by Price</option>
      <option value="discount">Sort by Discount</option>
    </select>
  );
}

export default SortComponent;