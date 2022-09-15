import React, {useEffect} from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart({ cart, setCart }) {
  // console.log(cart)

  useEffect(() => {
    localStorage.setItem("storedDetail", JSON.stringify(cart));
  }, [cart])

  const DisplayCart = () => {
    // console.log(localStorage)
    // let d = JSON.parse(localStorage.getItem("storedDetail"));
    let data = '';
    if(localStorage.getItem("storedDetail").length > 0){
      data = JSON.parse(localStorage.getItem("storedDetail"));
    }

    // console.log(d)
    if (data) {
      return data.map((i, index) => {
        return (
          <div key={index}>
            <h3>{i.name}</h3>
            <h2>{i.price * i.quantity}</h2>
          </div>
        );
      });
    }
  };

  return (
    <div className="cart">
      <span>
        <ShoppingCartIcon />
      </span>
      <h1>Your Cart</h1>
      <DisplayCart />
    </div>
  );
}

export default Cart;
