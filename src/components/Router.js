import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Shop from './Shop'
import Cart from './Cart'
import Checkout from './Checkout'
import Confirm from './Confirm'
import Add from './Add'
import List from './List'

export default function Router() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop/:id" element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="add" element={<Add />} />
        <Route path="list" element={<List />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}