import React, { useState } from 'react';

function FilterComponent({ setFilters }) {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ company, category, minPrice, maxPrice });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={company} onChange={(e) => setCompany(e.target.value)}>
        <option value="">Select Company</option>
        <option value="AMZ">AMZ</option>
        <option value="GCP">GCP</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
        {/* Add other categories as needed */}
      </select>

      <input 
        type="number" 
        placeholder="Min Price" 
        value={minPrice} 
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input 
        type="number" 
        placeholder="Max Price" 
        value={maxPrice} 
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default FilterComponent;