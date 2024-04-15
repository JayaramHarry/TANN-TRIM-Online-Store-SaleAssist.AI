import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

const ProductGrid = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const fetchedProducts = response.data;
        console.log('Fetched products:', fetchedProducts);
        setProductsByCategory(groupProductsByCategory(fetchedProducts));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array to run the effect only once

  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  };

  return (
    <div className="product-grid">
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.entries(productsByCategory).map(([category, products]) => (
          <ProductCard key={category} category={category} products={products} />
        ))
      )}
    </div>
  );
};

export default ProductGrid;
