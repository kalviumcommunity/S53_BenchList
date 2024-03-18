import React, { useState } from 'react';
import axios from 'axios';

const SignUpPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/data/signup", credentials);
      console.log(response.data)
      document.cookie = `accessToken=${response.data.token}; path=/`;
      console.log("Login Successful");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="divbody">
        <div className="sign-up-page">
          <div className="sign-up-form">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} type="text" name="name" placeholder="Name" />
              <input onChange={handleChange} type="password" name="password" placeholder="Password" />
              <button type="submit" className="sign-up-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
