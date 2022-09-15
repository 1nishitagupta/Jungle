import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./home.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Home({ products }) {
  const [cart, setCart] = useState([]);

  const handleClick = (name, price) => {
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
  };

  const addItemToCart = (name, price) => {
    console.log(name, price);
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

  const DisplayProducts = () => {
    return (
      <div className="row g-0 products">
        {products.map((product, index) => {
          return (
            <div className="col-sm-4 product mb-5 mx-sm-1 card" key={index}>
              <div className="productPhoto">
                <img
                  className="card-img-top"
                  key={index}
                  src={product.photo}
                  alt={product.name}
                />
              </div>
              <div className="card-body productDesc">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.desc}</p>
                <h5>
                  <CurrencyRupeeIcon className="ruppeIcon" />
                  {product.price}
                </h5>
                <button
                  className="btn btn-primary addToCart"
                  onClick={() => handleClick(product.name, product.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const DisplayCart = () => {
    return (
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ({cart.length})Cart
          </a>
          <ul className="dropdown-menu">
            {cart.map((c, index) => {
              return (
                <>
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      <span className="cartItemName">
                        <strong> {c.name} </strong>
                      </span>
                      <span className="cartItemQuantity">x {c.quantity} </span>
                      <span className="cartItemPrice">
                        <strong> {c.price * c.quantity} </strong>
                      </span>
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  };

  return (
    <>
      <header className="navbar fixed-top navbar-expand-md bg-light">
        <div className="container">
          <h1 className="navbar-brand">
            <a href="">Ecommerce in React</a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cartMenu"
            aria-controls="cartMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="cartMenu">
            <DisplayCart />
          </div>
        </div>
      </header>
      <div className="content">
        <div className="hero py-5">
          <div className="container">
            <div className="row">
              <h3 className="text-center">
                Add any product to the cart to see magic happen
              </h3>
            </div>
          </div>
        </div>
        <main>
          <div className="container">
            <DisplayProducts />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
