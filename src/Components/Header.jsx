import React, { useState } from "react";
import "../Assets/Styles/globalStyle.css";
import { Select, Space } from "antd";

// Images
import logo from "../Assets/Images/logo.png";
const typePrice = [
  {
    value: 'USD',
    label: 'Unitest States Dollar',
    money: 1
  },
  {
    value: 'VND',
    label: 'Vietnam Dong',
    money: 23709
  },
  {
    value: 'EUR',
    label: 'Euro',
    money: 0.93
  },
  {
    value: 'AUD',
    label: 'Australia Dollar',
    money: 1.49
  },
  {
    value: 'THB',
    label: 'Thai Bath',
    money: 34.57
  }
];



function Header() {
  const handleChange = (value) => {
    return value;
  };
  
  return (
    <div className="header">
      <div className="leftHeader">
        <h1>@homestay</h1> <img src={logo}></img>
      </div>
      <div className="rightHeader">
        <a href="#">Sign in</a>
        <Space wrap>
          <Select
            defaultValue="USD"
            style={{
              width: 100,
            }}
            onChange={handleChange}
            options={typePrice.map((typePrice) => ({
              value: typePrice.value,
              label: typePrice.value,
            }))
            }
          />
        </Space>
      </div>
    </div>
  );
}

export default Header;