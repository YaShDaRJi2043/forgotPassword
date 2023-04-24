import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../App";
import { BASE_URL } from "./Helper";

const Dashboard = () => {
  const { info, setInfo } = useContext(dataContext);
  const history = useNavigate();
  const uservalid = async () => {
    const token = localStorage.getItem("usertoken");
    console.log(token);

    const res = await fetch(`${BASE_URL}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    console.log(data);

    if (data.status == 404 || !data) {
      history("*");
    } else {
      history("/dashboard");
      setInfo(data);
    }
  };

  useEffect(() => {
    uservalid();
  }, []);
  return (
    <>
      {info ? (
        <>
          <div className="justify-content-center d-flex">
            <img src="/man.png" className="img-fluid w-25 mt-5" />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <h1>User Email:{info.validuser.email}</h1>
          </div>
        </>
      ) : (
        history("*")
      )}
    </>
  );
};

export default Dashboard;
