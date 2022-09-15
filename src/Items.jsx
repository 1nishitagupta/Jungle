import React, { useState } from 'react'
import Cart from './Cart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Items({ items , cart }) {
   

    function display(name, price) {
        let existAlready = false;
        if (cart.length > 0) {
            {
              const namesIncart = cart.map((c) => c.name);
              existAlready = namesIncart.includes(name) ? namesIncart.lastIndexOf(name)   : false;
            }
            existAlready === false
                ? addItemToCart(name, price)
                : updateItemInCart(existAlready);
        } else {
            addItemToCart(name, price);
            
        }
        console.log(cart)
    }


    const addItemToCart = (name, price) => {
        const itemToadd = {
            name: name,
            price: price,
            quantity: 1
        };

        setCart([...cart, itemToadd]);
    };
    

    const updateItemInCart = (count) => {
        cart[count].quantity = cart[count].quantity + 1;
        setCart([...cart]);
       
    };


    
    


    const DisplayCart = () => {
      return cart.map((i) => {
        return (
          <>
            <h3>{i.name}</h3>
            <h2>{i.price * i.quantity}</h2>
          </>
        );
      });
    }

    return (
        <>
          {
            items.map((detail, index) => {
              return (
                <div className='plant'>
                  <img src={detail.path} alt="" />
                  <p>{detail.name}</p>
                  <div className='price'><CurrencyRupeeIcon/>{detail.price}</div>
                  <button key={index} onClick={() => display(detail.name, detail.price)}>Add to cart</button>
                </div>)
              })
            }
            <DisplayCart />
        </>
      )
}

export default Items