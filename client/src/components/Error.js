import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="justify-content-center d-flex">
        <img src="/undraw_page_not_found_re_e9o6.svg " className="img-fluid" />
      </div>
      <div
        className="d-flex justify-content-center mt-4"
        style={{ fontSize: "26px", color: "#6C63FF" }}
      >
        <NavLink to="/">Bcak to Home</NavLink>
      </div>
    </>
  );
};

export default Error;
