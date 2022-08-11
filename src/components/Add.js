import React from 'react';

function Add() {
    
    return (
      <div className="m-5">
        
        <div className="card">
          <h5 className="card-header"><i className="fa-solid fa-address-book"></i> Add</h5>
          <div className="card-body">
            <h5 className="card-title">Any questions?</h5>
            <p className="card-text">Add us by e-mail or through any of our social networks</p>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Add;