import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./Helper";

const Signup = () => {
  const history = useNavigate();
  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const txt = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  console.log(val);

  const btnn = async (e) => {
    e.preventDefault();

    const { name, email, password } = val;
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status == 404) {
      alert("Enter Valid details");
    } else {
      history("/");
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          margin: "20px 450px 0px",
          border: "none",
          boxShadow: "0px 0px 15px -10px #2d3748",
        }}
      >
        <div className="mt-5">
          <div className="text-center">
            <h1 style={{ color: "#2a4365" }}>Sign Up</h1>
          </div>
          <div className="text-center">
            <p style={{ color: "#718096" }}>
              We are glad that you will be using Project Cloud to manage
              <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>
          <br />
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <b>Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  style={{ boxShadow: "none" }}
                  onChange={txt}
                  name="name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <b>Confirm Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Your confirm Password"
                  style={{ boxShadow: "none" }}
                  onChange={txt}
                  name="cpassword"
                />
              </Form.Group>

              <Button
                className="w-100 mb-5 mt-1"
                style={{ backgroundColor: "#2a4365", border: "none" }}
                onClick={btnn}
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
