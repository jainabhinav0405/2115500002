import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterComponent from '../components/FilterComponent';
import SortComponent from '../components/SortComponent';
import { getTopProducts } from '../services/api';


// import React from 'react'

const ProductListPage = () => {
    console.log('ProductList');
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('rating');
  
    useEffect(() => {
      fetchProducts();
    }, [filters, sort]);
  
    const fetchProducts = async () => {
      const data = await getTopProducts(filters, sort);
      setProducts(data);
    };
  
    return (
      <div>
        <h1>Top Products</h1>
        <FilterComponent setFilters={setFilters} />
        <SortComponent setSort={setSort} />
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default ProductListPage