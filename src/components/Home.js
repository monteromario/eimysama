/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

import React, { useState, useEffect } from "react";
const axios = require("axios").default;

let filteredData;
let selectedData;

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const getData = () => {
    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/getData")
      .then((res) => {
        if (res.data.length === 0) {
          setData(null);
        } else {
          setData(res.data);
          setFilteredData(res.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function setFilteredData(data) {
    filteredData = data.filter((i) => i.home === true);
  }

  function setSelectedData(item) {
    selectedData = filteredData.filter((i) => i.id == item);
  }

  function manageCart(e) {
    let cart = JSON.parse(localStorage.getItem("ES_items"));
    if (!cart) {
      cart = [];
    } else {
    }
    cart.push(e.target.id);
    localStorage.setItem("ES_items", JSON.stringify(cart));
    if (modal) {closeModal()}
  }

  function closeModal() {
    setModal(false);
  }

  function openModal(e) {
    setSelectedId(e.target.id);
    setSelectedData(e.target.id);
    setModal(true);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center min-vh-100 m-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder"> E I M Y S A M A </h1>
                <p className="lead fw-normal text-white-50 mb-0">???????????????</p>
              </div>
            </div>
          </header>
          <div
            id="mainCarousel"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src={filteredData[0].pictures[0]}
                  className="d-block w-100"
                  alt={filteredData[0].name}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{filteredData[0].name}</h5>
                  <p>{filteredData[0].size}</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={filteredData[0].pictures[0]}
                  className="d-block w-100"
                  alt={filteredData[0].name}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{filteredData[0].name}</h5>
                  <p>{filteredData[0].size}</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={filteredData[0].pictures[0]}
                  className="d-block w-100"
                  alt={filteredData[0].name}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{filteredData[0].name}</h5>
                  <p>{filteredData[0].size}</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#mainCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <section className="py-5">
            <p className="ml-4">
              <span className="h1">Featured products</span>
              {JSON.parse(localStorage.getItem("ES_items")).length ? (
                <a href="/cart">
                  <span className="ml-5 h5 color--black">
                    <i className="bi-cart-fill me-1"></i>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <small>
                      <span className="badge bg-danger text-white ms-1 rounded-pill align-top">
                        {JSON.parse(localStorage.getItem("ES_items"))
                          ? JSON.parse(localStorage.getItem("ES_items")).length
                          : "0"}
                      </span>
                    </small>
                  </span>
                </a>
              ) : (
                ""
              )}
            </p>
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {filteredData.map((product) => (
                  <div className="col mb-5" id={product.id} key={product.id}>
                    <div className="card h-100">
                      <div className="badge bg-dark text-white position-absolute">
                        {product.top ? "Top" : ""}
                      </div>
                      <div className="badge bg-success text-white position-absolute">
                        {product.new ? "New" : ""}
                      </div>
                      <div className="badge bg-danger text-white position-absolute">
                        {product.sale ? "Sale" : ""}
                      </div>
                      <img
                        className="card-img-top"
                        src={product.pictures[0]}
                        alt="..."
                        id={product.id}
                        onClick={openModal}
                      />
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{product.name}</h5>
                          <span className="text-muted text-decoration-line-through">
                            {product.price_old ? product.price_old + "??? " : ""}
                          </span>
                          {product.price_range
                            ? product.price_range
                            : product.price + "???"}
                          {product.size ? (
                            <div className="m-1 fw-light">{product.size}</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div
                        className="card-footer p-4 pt-0 border-top-0 bg-transparent"
                        id={product.id}
                      >
                        <div className="text-center" id={product.id}>
                          {product.size ? (
                            <a
                              className="btn btn-outline-dark mt-auto"
                              href="/"
                              id={product.id}
                              onClick={(e) => manageCart(e)}
                            >
                              Add to cart
                            </a>
                          ) : (
                            <span className="mt-auto text-danger">
                              Sold out
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <a className="btn btn-outline-dark" href="/shop">
                View all products
              </a>
            </div>
          </section>
          {modal ? (
            <div className="modal--centered">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedData[0].name}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div
                      id="detailCarousel"
                      className="carousel carousel-dark slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#detailCarousel"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#detailCarousel"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#detailCarousel"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="10000"
                        >
                          <img
                            src={selectedData[0].pictures[0]}
                            className="d-block w-100"
                            alt={selectedData[0].name}
                          />
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img
                            src={selectedData[0].pictures[1]}
                            className="d-block w-100"
                            alt={selectedData[0].name}
                          />
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src={selectedData[0].pictures[2]}
                            className="d-block w-100"
                            alt={selectedData[0].name}
                          />
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#detailCarousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#detailCarousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      id={selectedData[0].id}
                      onClick={(e) => manageCart(e)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
