import React from 'react';

function Contact() {
    
    return (
      <div className="m-5 vh-100">
        <div className="card">
          <h5 className="card-header"><i className="fa-solid fa-address-book"></i> Contact</h5>
          <div className="card-body">
            <h5 className="card-title">Any questions?</h5>
            <p className="card-text">Contact us by e-mail or through any of our social networks</p>
            <p><a href="/" className="btn btn-outline-dark"><i className="fa-solid fa-envelope"></i> test@test.com</a></p>
            <p><a href="/" className="btn btn-outline-dark"><i className="fa-brands fa-instagram"></i> Instagram</a></p>
            <p><a href="/" className="btn btn-outline-dark"><i className="fa-brands fa-facebook"></i> Facebook</a></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;