import React from "react";
// import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";


const AdminLogin = () => {
  const [email, setEmail] = useState("Faizan@gmail.com");

  const [password, setPassword] = useState("pass@123");

  async function loginUser(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost:4000/login",

        {
          email: email,
          password: password,
        }
      )
      .then(async (result) => {
        localStorage.setItem("token", result.data.data.Token);
        console.log(result.data.data.Token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <> 
       <div className="admin_login-container">
          <div className="login-container">
      <h2>Login to your Account</h2>
      <form method="POST" onSubmit={loginUser}>
        <label htmlFor="username" className="input-text" required>
          Username or Email
        </label>
        <br />
        <input
          type="email"
          className="input"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password" required className="input-text">
          Your Password
        </label>
        <br />
        <input
          type="password"
          className="input"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="btn">
          Log in
        </button>
      </form>
      </div>
      </div>
      </>
  );
};

export default AdminLogin;