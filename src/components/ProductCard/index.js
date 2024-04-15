import React from 'react';
import { RiBookmarkLine } from 'react-icons/ri';
import { IoShareOutline } from "react-icons/io5";

import "./style.css";

const ProductCard = ({ category, products }) => {
  return (
    <div>
      <div className='category-container'>
        <h3>{category.toUpperCase()}</h3>
        <div className='length-icon-continer'>
          <p>{products.length} products</p>
          <IoShareOutline className='icon'/>
        </div>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <RiBookmarkLine className="image-bookmark" />
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
