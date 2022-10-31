import React, {useEffect , useContext} from "react";
import { UserContext } from "./Items";
import { useState, createContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function Cart() {
  const cart = useContext(UserContext);

  
  console.log(cart)
  
  
  const DisplayCart = () => {
    // console.log(cart);
    let data = cart
    useEffect(() => {
      if (data) {
        // console.log(data,"dddddddddddddddd")
      }

    }, [cart])
   return cart.map((c)=>{
      return (
        <>
          <h1>{ c.name}</h1>
          <h1>{"price " +" => "+ c.price * c.quantity}</h1>
          <p>{"quantity " + " => " + c.quantity}</p>

        </>
        )
    })
    

    }
    
    return (
    
      <div className="cart">
      <span>
        <ShoppingCartIcon />
      </span>
      <h1>Your Cart</h1>
        <DisplayCart />
    </div>
    )
};
  
export default Cart;