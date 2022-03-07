import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  //Here i can write javascript code and functions
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="header">
      <div className="header-menu">
        <NavLink
          className={`menu-link ${
            splitLocation[1] === "Home" ? "is-active" : ""
          }`}
          to="#"
        >
          Home
        </NavLink>
        <NavLink
          className={`menu-link ${
            splitLocation[1] === "Creator" ? "is-active" : ""
          }`}
          to="/Creator"
        >
          Creator
        </NavLink>
        <NavLink
          className={`menu-link ${
            splitLocation[1] === "Profile" ? "is-active" : ""
          }`}
          to="/Profile"
        >
          Profile
        </NavLink>
        <NavLink
          className={`menu-link ${
            splitLocation[1] === "Login" ? "is-active" : ""
          }`}
          to="/Login"
        >
          Login
        </NavLink>
        <NavLink className="menu-link" to="/Logout">
          Logout
        </NavLink>
        <NavLink
          className={`menu-link ${
            splitLocation[1] === "Register" ? "is-active" : ""
          }`}
          to="/Register"
        >
          Register
        </NavLink>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="header-profile">
        <img
          className="profile-img"
          src="https://i.pinimg.com/564x/cc/4a/f6/cc4af6bd75bb15129391ae808e1b9c3c.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
