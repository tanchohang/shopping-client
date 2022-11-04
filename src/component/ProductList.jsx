import React from 'react';
import { useNavigate } from 'react-router-dom';

import products from '../model/product';
import ProductTile from './subcomponent/ProductTile';

function ProductList() {
  let navigate = useNavigate();
  return (
    <>
      <ul className="product-list">
        {products.map(({ id, title, image, description, price }) => (
          <li className="" key={id} onClick={() => { navigate('/product/' + id); }}>
            <ProductTile
              title={title}
              image={image}
              description={description}
              price={price}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
