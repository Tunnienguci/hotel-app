import React from "react";
import "../Assets/Styles/globalStyle.css";
import { Select, Space } from "antd";

// Images
import logo from "../Assets/Images/logo.png";
const typePrice = [
  {
    value: 'USD',
    label: 'Unitest States Dollar',
  },
  {
    value: 'VND',
    label: 'Vietnam Dong',
  },
  {
    value: 'EUR',
    label: 'Euro',
  },
  {
    value: 'AUD',
    label: 'Australia Dollar',
  },
  {
    value: 'THB',
    label: 'Thai Bath',
  }
];



function Header() {
  const [setPrice] = React.useState('');
  const handleChange = (event) => {
    setPrice(event.target.value);
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