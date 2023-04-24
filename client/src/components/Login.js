import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { dataContext } from "../App";
import { BASE_URL } from "./Helper";

const Login = () => {
  const { info, setInfo } = useContext(dataContext);
  const [val, setVal] = useState({
    email: "",
    password: "",
  });
  const txt = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  console.log(val);
  const btnn = async () => {
    const { email, password } = val;

    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data.token);

    if (data.status == 404) {
      alert("invaid details");
    } else {
      localStorage.setItem("usertoken", data.token);
      setInfo(data, true);
      alert("Login Successful");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          margin: "100px 450px 0px",
          border: "none",
          boxShadow: "0px 0px 15px -10px #2d3748",
        }}
      >
        <div className="mt-5">
          <div className="text-center">
            <h1 style={{ color: "#2a4365" }}>Welcome Back, Login In</h1>
          </div>
          <div className="text-center">
            <h6 style={{ color: "#718096" }}>
              Hi, we are you glad you are back. please login.
            </h6>
          </div>
          <br />
          <div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Address"
                  style={{ boxShadow: "none" }}
                  onChange={txt}
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  style={{ boxShadow: "none" }}
                  onChange={txt}
                  name="password"
                />
              </Form.Group>
              <Button
                className="w-100 mb-2"
                style={{ backgroundColor: "#2a4365", border: "none" }}
                onClick={btnn}
              >
                Login
              </Button>
            </Form>
          </div>
          <div className="text-center mb-2">
            Don't have an Account?
            <NavLink
              to="/signup"
              style={{ color: "#718096", marginLeft: "4px" }}
            >
              Sign Up
            </NavLink>
          </div>
          <div className="text-center mb-5">
            <b>
              Forgot Password
              <NavLink
                to="/sendemail"
                style={{ color: "#718096", marginLeft: "4px" }}
              >
                Click Here
              </NavLink>
            </b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
