import React from "react";
import "../Assets/Styles/globalStyle.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
  const Price = typePrice.map((e)=>
    <MenuItem value={e.value}><span id="typePriceitem">{e.value}</span></MenuItem>
  );

  return (
    <div className="header">
      <div className="leftHeader">
        <h1>@homestay</h1> <img src={logo}></img>
      </div>
      <div className="rightHeader">
        <a href="#">Sign in</a>
        <FormControl sx={{ m: 1, minWidth: 10,}} size="small">
          <InputLabel id="typePrice"></InputLabel>
          <Select
            id="typePrice"
            defaultValue={typePrice[0].value}
            onChange={handleChange}
          >
            {Price}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Header;