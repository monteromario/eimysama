/* eslint-disable eqeqeq */

import React from "react";
import data from '../data/products.json'


function Confirm() {

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let email = urlParams.get('email')
    let cart = []
    let cartItems = urlParams.get('cart').split(',')
    cartItems.map(item => cart.push(data.find(i => i.id == item)))

    function cleanCart() {
        localStorage.setItem('ES_items', '[]')
    }
    
    return (
      <div className="m-5 min-vh-100">
        <b><i className="fa-solid fa-check"></i> Thank you!</b>
        <p>We have received your request.</p>
        <p></p>
        <p>{cart.map(item => <li key={item.id}>{item.name}</li> )}</p>
        <p>Will will contact you soon on {email} for further details.</p>
        <p></p>
        <p>ありがとうございました</p>
        <a className="btn btn-outline-dark my-3" href="/" onClick={cleanCart}>Continue shopping</a>
      </div>
    );
  }
  
  export default Confirm;