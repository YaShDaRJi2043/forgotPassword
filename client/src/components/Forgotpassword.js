import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useParams } from "react-router-dom";
import { BASE_URL } from "./Helper";

const Forgotpassword = () => {
  const [password, setpassword] = useState({
    pass: "",
  });

  const { id, token } = useParams();

  const txt = (e) => {
    const { name, value } = e.target;
    setpassword({ ...password, [name]: value });
  };
  console.log(password);

  const send = async (e) => {
    e.preventDefault();
    const { pass } = password;
    if (pass == "") {
      alert("Enter Password");
    } else {
      const res = await fetch(`${BASE_URL}/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pass,
        }),
      });

      const data = await res.json();
      console.log(data);
    }
  };

  const uservalid = async () => {
    const res = await fetch(`${BASE_URL}/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status == 201) {
      console.log("user valid");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    uservalid();
  }, []);
  return (
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
          <div className="text-center">
            <h1 style={{ color: "#2a4365" }}>Enter Your new Password</h1>
          </div>
        </div>
        <br />
        <div>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>New Password</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Email Address"
                style={{ boxShadow: "none" }}
                name="pass"
                onChange={txt}
              />
            </Form.Group>
            <Button
              className="w-100 mb-3"
              style={{ backgroundColor: "#2a4365", border: "none" }}
              onClick={send}
            >
              Send
            </Button>
            <NavLink
              to="/"
              className="d-flex justify-content-center"
              style={{ color: "#718096" }}
            >
              Home
            </NavLink>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
