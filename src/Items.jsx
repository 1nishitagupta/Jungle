import React, { useEffect, useState , useContext , createContext } from "react";
import Cart from "./Cart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";


export const UserContext = createContext();

console.log(UserContext)
function Items({ items }) {

  const [cart, setCart] = useState([]);

  function display(name, price) {
    console.log(cart,"hhhhhhhhhhhhhhhhhhhh");
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


  const addItemToCart = (name, price) => {
    const itemToadd = {
      name: name,
      price: price,
      quantity: 1,
    };

    setCart([...cart, itemToadd]);
    
  };

  console.log(cart);

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
      <UserContext.Provider value ={cart}>
      <Cart />
      </UserContext.Provider>
    </>
    
  );
}

export default Items;