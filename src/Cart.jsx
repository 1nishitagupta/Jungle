import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart({cart}) {
  console.log(cart)
  return (
    <div className="cart">
      <span><ShoppingCartIcon/></span>
      <h1>Your Cart</h1>
      
    </div>
  )
}

export default Cart
