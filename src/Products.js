import React from 'react';

const Products = ({ products, cartItems, createLineItem, updateLineItem })=> {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {
          products.map( product => {
            const cartItem = cartItems.find(lineItem => lineItem.product_id === product.id);
            return (
              <li key={ product.name }>
                {product.name}
                <img className="prodPix" src={product.img}/> Price: ${product.price}.00 Description:{product.description}
                {
                  cartItem ? <button onClick={ ()=> updateLineItem(cartItem)}>Add Another</button>: <button onClick={ ()=> createLineItem(product)}>Add</button>
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;
