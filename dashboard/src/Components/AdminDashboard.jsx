import React from "react";
import { useState } from "react";


const AdminRegister = () => {
  const [form, setForm] = useState({
     email: "", phone: ""
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setForm({ ...form, [name]: value })

  }

  const postData = async (e) => {
    e.preventDefault()

    const { email, password } = login

    const res = await fetch("/adminRegister", {
      method: "POST",
      headers: {

        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name, email, phone
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

    <div className="background-image-animation">
      <div className="Apply-container">
        <h1 id=""> Dashboard  </h1>
        <form method="POST">

          <input type="submit" name="submit-form" id="submit-button" className="form-submit"
            value="Submit And Continue" onClick={postData} />

        </form>
      </div>
    </div>
  )
}
export default ApplyForm

