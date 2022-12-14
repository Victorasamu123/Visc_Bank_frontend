import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  // const [user_id, setuser_id] = useState("")
  let navigate = useNavigate();
  const endpoint1 = "https://visc-bank.herokuapp.com/users/signin";
  const signin = () => {
    if (email == "" || password == "") {
      console.log("enter correct information");
    } else {
      let user = { email, password };
      axios.post(endpoint1, user).then((result) => {
        console.log(result);
        console.log(result.data.user_id);
        let user_id = result.data.user_id;
        setmessage(result.data.message);
        console.log(user_id);
        if (result.data.status == true) {
          navigate("/dashboard", { state: { user_id: user_id } });
        } else {
          console.log("signin not successful");
        }
      });
    }
  };
  return (
    <>
      <section className="bg-light">
        <center>
          {message !== "" ? (
            <div className="alert alert-danger w-25">{message}</div>
          ) : (
            <div></div>
          )}
        </center>
        <center>
        <h1 className="pt-5 signup">Signin</h1>
          <div className="div-input">
            <input
              type="email"
              placeholder="Email address"
              className="input-area"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-area"
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="btn w-25 mt-3 btn-primary" onClick={signin}>
              signin
            </button>
            <p>
              Do not have an account?
              <Link to="/" className="link">
                sign up here
              </Link>
            </p>
          </div>
        </center>
      </section>
    </>
  );
};

export default Signin;
