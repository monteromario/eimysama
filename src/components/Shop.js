import React from "react";
import data from '../data/products.json'

function Shop() {

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let filter = urlParams.get('filter')
  let search = urlParams.get('search')
  let filteredData
  if (filter === 'top') {
    filteredData = data.filter(i => i.top)
  } else if (filter === 'new') {
    filteredData = data.filter(i => i.new)
  } else if (filter === 'sale') {
    filteredData = data.filter(i => i.sale)
  } else if (search) {
    filteredData = data.filter (i => i.name.toUpperCase().includes(search.toUpperCase()) )
  } else {
    filteredData = data
    filter = null
  }
  
  function manageCart(e) {
    let cart = JSON.parse(localStorage.getItem('ES_items'));
    if (!cart) {
        cart = []
    } else {}
    cart.push(e.target.id)
    localStorage.setItem('ES_items', JSON.stringify(cart));
}

return (
  <div>
    <section className="">
        <div className="container px-4 px-lg-5">
          <div className="sticky-top bg-white pt-3">
            <div className="btn-group mb-3">
              {!filter ? <a href="/shop" className="btn btn-outline-dark active" aria-current="page">All products</a> : <a href="/shop" className="btn btn-outline-dark" aria-current="page">All products</a>}
              {filter === 'top' ? <a href="/shop?filter=top" className="btn btn-outline-dark active">Top</a> : <a href="/shop?filter=top" className="btn btn-outline-dark">Top</a>}
              {filter === 'new' ? <a href="/shop?filter=new" className="btn btn-outline-dark active">New</a> : <a href="/shop?filter=new" className="btn btn-outline-dark">New</a>}
              {filter === 'sale' ? <a href="/shop?filter=sale" className="btn btn-outline-dark active">Sales</a> : <a href="/shop?filter=sale" className="btn btn-outline-dark">Sales</a>}
            </div>
          </div>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {filteredData.map(product => 
                <div className="col mb-5" id={product.id} key={product.id}>
                    <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute">{product.top ? "Top" : ""}</div>
                        <div className="badge bg-success text-white position-absolute">{product.new ? "New" : ""}</div>
                        <div className="badge bg-danger text-white position-absolute">{product.sale ? "Sale" : ""}</div>
                        <img className="card-img-top" src="https://placeimg.com/640/480/any" alt="..." />
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
                            {product.size ? <a className="btn btn-outline-dark mt-auto" href={search ? '/shop?search='+search : filter ? '/shop?filter='+filter : '/shop'} id={product.id} onClick={e => manageCart(e)}>Add to cart</a> : <span className="mt-auto text-danger">Sold out</span>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {filteredData.length === 0 ? <p className="text-center m-5">No results</p>: ''}              
            </div>
        </div>
    </section>
  </div>
);
  }
  
  export default Shop;