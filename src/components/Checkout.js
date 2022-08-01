/* eslint-disable eqeqeq */

import data from '../data/products.json'

let cartItems = JSON.parse(localStorage.getItem('ES_items'));
        if (!cartItems) {
          cartItems = []
        } else {} 

let cart = []

cartItems.map(item => cart.push(data.find(i => i.id == item)))
        
function Checkout() {
    
    return (
      <div className="min-vh-100">
        <form className="mx-4" autoComplete="on" action="/confirm" method="get">
        <div className="my-4 text-center">
          <i className="fa-solid fa-cart-shopping"></i> Checkout: {cart.length === 1 ? <>{cart.length} item <button type="submit" className="btn btn-success ml-3">Place order</button></> : cart.length !== 0 ? <>{cart.length} items <button type="submit" className="btn btn-success ml-3">Place order</button></> : <>empty <div className="mt-2"><a className="btn btn-outline-dark" href="/">add items</a></div></>} 
        </div>
        <div className="container px-4 px-lg-5 mt-1">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cart.map(product => 
                <div className="col mb-3" id={product.id} key={product.id}>
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
                    </div>
                </div>
            )}              
            </div>
        </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required autoComplete="on" name="email"/>
                <input type="cart" className="form-control" id="cart" autoComplete="on" name="cart" defaultValue={cartItems} hidden/>
            </div>
            
            <div className="mb-5 text-center">
            {cart.length !== 0 ? <><a className="btn btn-outline-dark mt-auto" href="/cart">Back to cart</a><button type="submit" className="btn btn-success ml-3">Place order</button></>
             : <div className=""> </div>}
             </div>
        </form>
        


        </div>
    );
  }
  
  export default Checkout;