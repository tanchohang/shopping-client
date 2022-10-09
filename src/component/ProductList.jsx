import React from 'react';

import Product from './Product';

import products from '../model/product';

function ProductList() {
  return (
    <div className="">
      <ul className="product-list">
        {products.map(({ id, title, image, description, price }) => (
          <li className="" key={id}>
            <Product
              title={title}
              image={image}
              description={description}
              price={price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
