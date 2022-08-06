/* eslint-disable eqeqeq */

import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

function Confirm() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let email = urlParams.get('email')

    function cleanCart() {
        localStorage.setItem('ES_items', '[]')
    }

    function mapItems(data) {
      let tempCart = []
      let cartItems = urlParams.get('cart').split(',')
      cartItems.map(item => tempCart.push(data.find(i => i.id == item)))
      setCart(tempCart)
    }

    const getData = () => {
      axios.get('https://eimysama-api.herokuapp.com/getData')
      .then((res) => {
        if (res.data.length === 0) {
          setData(null)
        } else {
          setData(res.data)
          mapItems(res.data)
          setLoading(false)
        }
      })
      .catch((e) => {
        console.log(e);
      })
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
    }
    </div>
    );
  }
  
  export default Confirm;