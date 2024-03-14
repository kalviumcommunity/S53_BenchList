import React from 'react';

const LoginPage = () => {
  return (
    <>
      <div className="divbody">
        <div className="sign-up-page">
          <div className="sign-up-form">
            <h2>Get Started</h2>
            <p>Already have an Account? Log In</p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="sign-up-btn">Sign Up</button>
            <p id='orwith'>or Sign Up with</p>
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