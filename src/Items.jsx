import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Items({ items, cart, setCart }) {
  function display(name, price) {
    let existAlready = false;
    if (cart.length > 0) {
      {
        const namesIncart = cart.map((c) => c.name);
        existAlready = namesIncart.includes(name)
          ? namesIncart.lastIndexOf(name)
          : false;
      }
      existAlready === false
        ? addItemToCart(name, price)
        : updateItemInCart(existAlready);
    } else {
      addItemToCart(name, price);
    }
  }

  useEffect(() => {
    localStorage.setItem("storedDetail", JSON.stringify(cart));
  }, [cart])

  const addItemToCart = (name, price) => {
    const itemToadd = {
      name: name,
      price: price,
      quantity: 1,
    };

    setCart([...cart, itemToadd]);
    
  };

  console.log(cart);
  console.log(localStorage);

  const updateItemInCart = (count) => {
    cart[count].quantity = cart[count].quantity + 1;
    setCart([...cart]);
    
  };


  return (
    <>
      {items.map((detail, index) => {
        return (
          <div className="plant" key={index}>
            <img src={detail.path} alt="" />
            <p>{detail.name}</p>
            <div className="price">
              <CurrencyRupeeIcon />
              {detail.price}
            </div>
            <button
              key={index}
              onClick={() => display(detail.name, detail.price)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Items;
