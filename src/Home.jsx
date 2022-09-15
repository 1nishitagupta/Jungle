import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import Cart from "./Cart";
import Items from "./Items";

function Home() {
    
    const [cart, setCart] = useState([])

  const items = [
    { path: "images/items/plant1.jpg", name: "plant1", id: 1, price: 10 },
    { path: "images/items/plant2.jpg", name: "plant2", id: 2, price: 20 },
    { path: "images/items/plant3.jpg", name: "plant3", id: 3, price: 30 },
    { path: "images/items/plant4.jpg", name: "plant4", id: 4, price: 40 },
    { path: "images/items/plant5.jpg", name: "plant5", id: 5, price: 50 },
    { path: "images/items/plant6.jpg", name: "plant6", id: 6, price: 60 },
    { path: "images/items/plant7.jpg", name: "plant7", id: 7, price: 70 },
    { path: "images/items/plant8.jpg", name: "plant8", id: 8, price: 80 },
    { path: "images/items/plant9.jpg", name: "plant9", id: 9, price: 90 },
    { path: "images/items/plant10.jpg", name: "plant10", id: 10, price: 100 },
    { path: "images/items/plant1.jpg", name: "plant11", id: 11, price: 110 },
    { path: "images/items/plant2.jpg", name: "plant12", id: 12, price: 120 },
    { path: "images/items/plant3.jpg", name: "plant13", id: 11, price: 130 },
    { path: "images/items/plant4.jpg", name: "plant14", id: 11, price: 140 },
    { path: "images/items/plant5.jpg", name: "plant15", id: 11, price: 150 },
    { path: "images/items/plant6.jpg", name: "plant16", id: 11, price: 160 },
    { path: "images/items/plant7.jpg", name: "plant17", id: 11, price: 170 },
    { path: "images/items/plant8.jpg", name: "plant18", id: 11, price: 180 },
    { path: "images/items/plant9.jpg", name: "plant19", id: 11, price: 190 },
    { path: "images/items/plant11.jpg", name: "plant20", id: 11, price: 200 },
  ];
  return (
    <>
      <Header />
      <Cart cart={cart} setCart={setCart} />
      <div className="items">
        <Items cart={cart} setCart={setCart} items={items} />
      </div>
    </>
  );
}

export default Home;
