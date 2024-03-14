import React, { useState } from 'react';

const LoginPage = () => {
  const [name,setName]=useState("");
  const handleChange = (e) => {
    setName(e.target.value)

  }

  const handleSubmit = () => {
      document.cookie=`username=${name}`
      window.location.reload();
  }

  const deleteCookie=()=>{
      document.cookie=`username=${name}; expires=Thu, 01 Jan 1970 00:00:00 UTC`
      window.location.reload();
  }
  return (
    <>
      <div className="divbody">
        <div className="sign-up-page">
          <div className="sign-up-form">
            <h2>Get Started</h2>
            <p>Don't have an Account? sing up</p>
            <input onChange={handleChange} type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSubmit} className="sign-up-btn">login</button>
            <button onClick={deleteCookie} className="sign-up-btn">logout</button>
            <p id='orwith'>or login with</p>
            <div className="auth-providers">
              <button className="google-btn">
                <i className="fa fa-google"></i>
              </button>
              <button className="apple-btn">
                <i className="fa fa-apple"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;