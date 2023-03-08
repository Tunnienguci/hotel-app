import React, { useState } from "react";
import "../Assets/Styles/globalStyle.css";
import { Select, Space } from "antd";

// Images
import logo from "../Assets/Images/logo.png";
function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <a href="/"><h1>@homestay</h1></a><img src={logo}/>
      </div>
      <div className="rightHeader">
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}

export default Header;