/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

let filteredData

function List() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState(null);


const getData = () => {
  axios.get(process.env.REACT_APP_API_BASE_URL+'/getData')
  .then((res) => {
    if (res.data.length === 0) {
      setData(null)
    } else {
      setData(res.data)
      setFilteredData(res.data)
      setLoading(false)
    }
  })
  .catch((e) => {
    console.log(e);
  })
}

const deleteProduct = (id) => {
  axios.get(process.env.REACT_APP_API_BASE_URL+'/delete/'+id)
  .then((res) => {
    if (res.data.length === 0) {
      console.log(res)
      closeModal()
    } else {
      closeModal()
      setLoading(false)
      setSelected(null)
      setMessageTimer('Product '+ res.data.name +' removed')
      getData()
    }
  })
  .catch((e) => {
    console.log(e);
  })
}

function setFilteredData(data) {
  filteredData = data;
}

function handleClick(e) {
  setSelected(e.target.id)
  if (e.target.name == 'delete') {
    setModal(true)
  } if (e.target.name == 'edit') {
    console.log('editing product id: ' + e.target.id)
  } else {}
}

function closeModal() {
  setModal(false)
}

function handleDelete() {
  setLoading(true)
  deleteProduct(selected)
}

function cleanMessage() {
  setMessage(null)
}

function setMessageTimer(text) {
  setMessage(text)
  setTimeout(cleanMessage, 5000);
}

  useEffect(() => {
    getData()
}, []);

  return (
    <div className="min-vh-100">
    <div>
    { loading ? <div className="d-flex justify-content-center m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> :
    <div>
    <p className="h3 m-3">Product list <small className="color--grey">({filteredData.length} items)</small></p>
    {message ? <div className="alert alert-success" role="alert">
      {message}
    </div> : ''}
              <ul className="list-group">
            {filteredData.map((product) => (
                <li className="list-group-item" key={product.id}><img src={product.pictures[0]} className="img--list" alt={product.name} /><small className="color--grey">id: {product.id}</small> {product.name}<button name="edit" className="btn btn-outline-dark btn-sm mx-2" id={product.id} onClick={handleClick}>Edit</button><button name="delete" className="btn btn-outline-danger btn-sm" id={product.id} onClick={handleClick}>Delete</button></li>
            ))}
              </ul>
      </div>
    } 
  </div>
  {modal ?
  <div className="modal--centered">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete product id: {selected}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete product id: {selected} ?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    : ''}
    </div>
  );
}

export default List;
