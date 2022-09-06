import React from 'react';

function Login() {
    
    return (
      <div className="m-4 mb-5">
        <h1><i className="fa-solid fa-square-info"></i> Login</h1>
        <form className="my-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" autoComplete="username" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="passoword" placeholder="Password" autoComplete="password" required/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;