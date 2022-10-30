import React, {useEffect , useContext} from "react";
import { UserContext } from "./Items";
import { useState, createContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
 

function Cart() {

  const cart = useContext(UserContext);
  console.log(cart);
  
  
  
  const DisplayCart = (cart) => {

    let data = cart;

    useEffect(() => {
      if (data) {
        console.log(data,"dddddddddddddddd")
      }
    }, [cart])
    }
  };

  return (
    
      <div className="cart">
      <span>
        <ShoppingCartIcon />
      </span>
      <h1>Your Cart</h1>
      <UserContext.Provider value={cart}>

        <DisplayCart />
      </UserContext.Provider>
    </div>
    
  );


export default Cart;
