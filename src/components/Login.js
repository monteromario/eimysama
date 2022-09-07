import React, { useState } from 'react';

function Login() {
  
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    if (password === process.env.REACT_APP_PASSWORD) {
      setError(null)
      localStorage.setItem('eimysama_token', password);
      window.location.href = "/list";
    } else {
      setError("Wrong password. Try again")
    }
  }
   
  return (
      <div className="m-4 mb-5 vh-100">
        { error ? <div className="alert alert-warning" role="alert">{error}</div> : '' }
        <h1><i className="fa-solid fa-square-info"></i> Login</h1>
        <form className="my-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" autoComplete="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="passoword" placeholder="Password" defaultValue="" autoComplete="password" onChange={handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;