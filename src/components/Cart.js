/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

let cart = []
let cartItems

        
function Cart() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get(process.env.REACT_APP_API_BASE_URL+'/getData')
    .then((res) => {
      if (res.data.length === 0) {
        setData(null)
      } else {
        setData(res.data)
        setCart(res.data)
        setLoading(false)
      }
    })
    .catch((e) => {
      console.log(e);
    })
  }

  function cleanCart() {
    localStorage.setItem('ES_items', '[]')
  }

  function removeItem(e) {
    cart.splice(cart.findIndex(i => i.id == e.target.id), 1)
    cartItems = []
    cart.map(item => cartItems.push(item.id))
    localStorage.setItem('ES_items', JSON.stringify(cartItems));
  }

  function setCart(data) {
    cartItems = JSON.parse(localStorage.getItem('ES_items'));
        if (!cartItems) {
          cartItems = []
        } else {} 

    cartItems.map(item => cart.push(data.find(i => i.id == item)))
  }

  function getRandomKey() {
    return Math.floor(Math.random() * 1000);
  }

  useEffect(() => {
    getData()
}, []);
    
    return (
      <div>
    { loading ? <div className="d-flex justify-content-center min-vh-100 m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> :
      <div className="min-vh-100">
        <div className="my-4 text-center">
          <i className="fa-solid fa-cart-shopping"></i> Your cart: {cart.length === 1 ? <>{cart.length} item <a className="ml-2 text-danger" href="/cart" onClick={cleanCart}>
            <i className="fa-solid fa-trash"></i>
          </a><a className="btn btn-success ml-3" href="/checkout">Checkout</a></> : cart.length !== 0 ? <>{cart.length} items <a className="ml-2 text-danger" href="/cart" onClick={cleanCart}>
            <i className="fa-solid fa-trash"></i>
          </a><a className="btn btn-success ml-3" href="/checkout">Checkout</a></> : <>empty <div className="mt-2"><a className="btn btn-outline-dark" href="/">add items</a></div></>} 
        </div>
        <div className="container px-4 px-lg-5 mt-1">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cart.map(product => 
                <div className="col mb-5" id={product.id} key={getRandomKey()}>
                    <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute">{product.top ? "Top" : ""}</div>
                        <div className="badge bg-success text-white position-absolute">{product.new ? "New" : ""}</div>
                        <div className="badge bg-danger text-white position-absolute">{product.sale ? "Sale" : ""}</div>
                        <img className="card-img-top" src={product.pictures[0]} alt="..." />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">{product.name}</h5>
                                <span className="text-muted text-decoration-line-through">{product.price_old ? product.price_old+'€ ' : ''}</span>
                                {product.price_range ? product.price_range : product.price+'€' }
                                {product.size ? <div className="m-1 fw-light">{product.size}</div> : ''}
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" id={product.id}>
                            <div className="text-center" id={product.id}>
                            {product.size ? <a className="btn btn-outline-dark mt-auto" href="/cart" id={product.id} onClick={e => removeItem(e)}>Remove</a> : <span className="mt-auto text-danger">Sold out</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}              
            </div>
        </div>
            <div className="mb-5 text-center">
            {cart.length !== 0 ? <><a className="btn btn-outline-dark ml-3" href="/">Continue shopping</a><a className="btn btn-success ml-3" href="/checkout">Checkout</a></>
             : <div className=""> </div>}
             </div>
        </div>
    }
    </div>
    );
  }
  
  export default Cart;