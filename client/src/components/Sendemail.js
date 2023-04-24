import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BASE_URL } from "./Helper";

const Sendemail = () => {
  const [val, setVal] = useState({
    send_mail: "",
  });
  console.log(val);
  const txt = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const btnn = async () => {
    const { send_mail } = val;
    const res = await fetch(`${BASE_URL}/sendmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        send_mail,
      }),
    });

    const data = await res.json();

    if (data.status == 201) {
      alert("Email send");
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
          <div
            className="text-center"
            style={{ color: "#2a4365", fontSize: "52px", fontWeight: "700" }}
          >
            Enter Your Email
          </div>
          <br />
          <div>
            <Form>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <b>Email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="send_mail"
                  placeholder="Enter Your Email Address"
                  style={{ boxShadow: "none" }}
                  onChange={txt}
                />
              </Form.Group>
              <Button
                className="w-100 mb-5"
                style={{ backgroundColor: "#2a4365", border: "none" }}
                onClick={btnn}
              >
                Send
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sendemail;
