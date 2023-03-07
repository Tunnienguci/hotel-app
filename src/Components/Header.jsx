import React, { useState } from "react";
import "../Assets/Styles/globalStyle.css";
import { Select, Space } from "antd";

// Images
import logo from "../Assets/Images/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <h1>@homestay</h1> <img src={logo}></img>
      </div>
      <div className="rightHeader">
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}

export default Header;