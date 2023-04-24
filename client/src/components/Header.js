import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { dataContext } from "../App";
import { BASE_URL } from "./Helper";

const Header = () => {
  const { info, setInfo } = useContext(dataContext);
  console.log(info);
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    const token = localStorage.getItem("usertoken");
    console.log(token);

    const res = await fetch(`${BASE_URL}/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    console.log(data);

    if (data.status == 404 || !data) {
      console.log("error");
    } else {
      history("/");
      localStorage.removeItem("usertoken");
      setInfo(false);
    }
  };
  return (
    <>
      <div
        className="p-3 d-flex justify-content-between"
        style={{ boxShadow: "0px 0px 15px -10px #2d3748" }}
      >
        <div className="px-5">
          <NavLink to="/" style={{ color: "#2a4365" }}>
            <h1>Cloud</h1>
          </NavLink>
        </div>
        <div className="px-5">
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  {info.validuser ? (
                    <Avatar
                      sx={{ width: 42, height: 42 }}
                      style={{ backgroundColor: "#2a4365", fontSize: "24px" }}
                    >
                      {info.validuser.name[0].toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar sx={{ width: 42, height: 42 }}></Avatar>
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "#000000DE" }}
              >
                <MenuItem>Profile</MenuItem>
              </NavLink>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      </div>
    </>
  );
};

export default Header;
