import React from "react";
// import { Link } from 'react-router-dom'
import { useState } from "react";

const AdminLogin = () => {
    
    const [login, setLogin] = useState({
         email: "", password: ""
      });
      let name, value;
      const handleInput = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value

        setLogin({ ...login, [name]: value })
       
      }
      const postData = async (e) => {
        e.preventDefault()
    
        const { email, password } = login
    
        const res = await fetch("/AdminLogin", {
          method: "POST",
          headers: {
    
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          email, password
          })
        });
    
        const data = await res.json()
    
        if (data.status === 400 || !data) {
          window.alert("Invalid Registration")
          console.log("invalid registration")
        } else {
          window.alert("Registration successfull")
          console.log("successfull registration")
        }
      }
      return (
    
        <div className="admin_login-container">
          <div className="login-container">
          <h1 id="admin-login-text"> Admin Login </h1>
            <form method="POST">
              
        <div>
        <label>
          Enter Email  &nbsp; &nbsp; &nbsp; : &nbsp;
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleInput}
            placeholder="email" />
        </label>
        </div>
        <br/>
        <div>
        <label>
          Enter Password  :&nbsp;
          <input
            type="password"
            name="password"
            value={login.password}
            onChange={handleInput}
            placeholder="password" />
        </label>
        </div>
        <br />

              <input type="submit" name="submit-form" id="submit-button" className="form-submit"
                value="Login" onClick={postData} />
    
            </form>
          </div>
        </div>
      )

}

export default AdminLogin