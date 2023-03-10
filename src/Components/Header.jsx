import React, { useState } from "react";
import "../Assets/Styles/globalStyle.css";
import { Avatar } from 'antd';

// Images
import logo from "../Assets/Images/logo.png";
function Header() {
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
}
  return (
    <div className="header">
      <div className="leftHeader">
        <a href="/"><h1>@homeStay</h1></a><img src={logo} />
      </div>
      <div className="rightHeader">
        {localStorage.getItem("user") ? (
          <div className="user">
            <Avatar size={30} src={localStorage.getItem("photo")}></Avatar>
            <a href="/mytrip">My Trip</a>
            <a id="nameTag" href="">{localStorage.getItem("name")}</a>
            <a onClick={Logout}>Logout</a>
          </div>
        ) : (
          <div className="user">
            <a href="/login">Login</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;