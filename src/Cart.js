import React from 'react';

const Cart = ({ updateOrder, removeFromCart, lineItems, cart, products})=> {
  
  //let totalPrice=0 needs to be the the lineItem.quantity mult by the product, product price
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {
          lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map( lineItem => {
            const product = products.find(product => product.id === lineItem.product_id) || {};
            
            function calculateTotalCartPrice() {
              // TODO: Loop through your cart and return the total price of all items in your cart
            let totalPrice =0;
            cart.forEach(() => {
              const foundItem = items.find((item) => {
                return itemId*1 === item.id
              })
              if(foundItem) {
              totalPrice = totalPrice + foundItem.price
               }
             })
             return totalPrice
            }
            console.log(
              `The total price of the items in your cart is: `,
              calculateTotalCartPrice()
            );
            return (
              <li key={ lineItem.id }>
               
                {product.name} Price: ${product.price}.00 Description: {product.description}
                ({ lineItem.quantity }) Total: ${product.price * lineItem.quantity}.00
                <hr/>
                 Grand Total:{totalPrice}
                <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>

                
              </li>
              
         
              
            );
          })
        }
      </ul>
     
      {
        lineItems.filter((lineItem) => {return lineItem.order_id === cart.id }).length ? <button onClick={()=> {
          updateOrder({...cart, is_cart: false });
        }}>Create Order</button>: null
      }
    </div>
  );
};

export default Cart;
