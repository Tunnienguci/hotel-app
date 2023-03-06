import "../Assets/Styles/homepage.css";
import * as React from "react";
import brand1 from '../Assets/Images/F1.webp';
import brand2 from '../Assets/Images/F2.webp';
import brand3 from '../Assets/Images/F3.webp';
import brand4 from '../Assets/Images/F4.webp';
import brand5 from '../Assets/Images/F5.webp';
import brand6 from '../Assets/Images/F6.webp';
import { useState } from "react";
import "../Assets/Styles/homepage.css";
import { DatePicker, Space } from "antd";
import { Select } from "antd";
import logo from "../Assets/Images/logo.png";

const { RangePicker } = DatePicker;

const provinceData = [
    "Vietnam",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Japan",
    "United States",
];
const cityData = {
    Vietnam: ["Hanoi", "Ho Chi Minh City", "Da Nang"],
    Thailand: ["Bangkok", "Pattaya", "Phuket"],
    Malaysia: ["Kuala Lumpur", "Penang", "Langkawi"],
    Singapore: ["Singapore"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    "United States": ["New York", "Los Angeles", "San Francisco"],
};

const adult = [1, 2, 3, 4, 5, 6, 7, 8];
const room = {
    1: [1],
    2: [1, 2],
    3: [2, 3],
    4: [2, 3, 4],
    5: [3, 4, 5],
    6: [3, 4, 5, 6],
    7: [4, 5, 6, 7],
    8: [4, 5, 6, 7, 8],
};

// Images
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


function Homepage() {
    const handleChange1 = (value) => {
        console.log(`selected ${value}`);
    };
    const [dates, setDates] = useState(null);
    const [value, setValue] = useState(null);
    const minDate = new Date();
    const disabledDate = (current) => {
        return current < minDate;
    };
    const onOpenChange = (open) => {
        if (open) {
            minDate.setDate(minDate.getDate());
            setDates(null || null);
        }
    };

    const [roomes, setroomes] = useState(room[adult[0]]);
    const [secondRoom, setsecondRoom] = useState(room[adult[0]][0]);
    const handleAdultChange = (value) => {
        setroomes(room[value]);
        setsecondRoom(room[value][0]);
    };

    const onsecondRoomChange = (value) => {
        setsecondRoom(value);
    };

    const [setCities] = useState(cityData[provinceData[0]]);
    const [setSecondCity] = useState(cityData[provinceData[0]][0]);
    const handleProvinceChange = (value) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };


    const handleSubmit = () => {
        const data = {
            city: setSecondCity,
            room: secondRoom,
            checkin: dates[0].format("YYYY-MM-DD"),
            checkout: dates[1].format("YYYY-MM-DD"),
        };
        console.log(data);
        window.location.href = "/hotel" + "?city=" + setSecondCity + "&room=" + secondRoom + "&checkin=" + dates[0].format("YYYY-MM-DD") + "&checkout=" + dates[1].format("YYYY-MM-DD");


        
    };

    return (
        <div className="homepage">
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
                        onChange={handleChange1}
                        options={typePrice.map((typePrice) => ({
                            value: typePrice.value,
                            label: typePrice.value,
                        }))
                        }
                        />
                    </Space>
                </div>
            </div>
            <div className="centerHomepage">
                <h1>Unlock Private Hotel Deals</h1>
                <p>Get 30-75% off the best publicly available rates</p>
            </div>
            <div className="formHomepage">
        <div className="formLocation">
            <h1>Location</h1>
            <Space wrap>
                <Select
                    defaultValue="Where are you going?"
                    style={{
                        width: 300,
                    }}
                    options={provinceData.map((province) => ({
                        options: cityData[province].map((city) => ({
                            value: city,
                            label: city + ", " + province,
                        })),
                        onOpenChange: handleProvinceChange,
                        label: province,
                    }))}
                    onChange={handleProvinceChange}
                />
            </Space>
        </div>
        <div className="vline"></div>
        <div className="formDate">
            <h1>Date</h1>
            <Space direction="vertical" aria-selected="true" size={12}>
                <RangePicker
                    value={dates || value}
                    disabledDate={disabledDate}
                    onCalendarChange={(val) => setDates(val)}
                    onChange={(val) => setValue(val)}
                    onOpenChange={onOpenChange}
                />
            </Space>
        </div>
        <div className="vline"></div>
        <div className="formGuest">
                <h1>Room and guests</h1>
                <Space wrap>
                    <Select
                        defaultValue={adult[0]}
                        style={{
                            width: 120,
                        }}
                        onChange={handleAdultChange}
                        options={adult.map((adult) => ({
                            label: adult + " Guest",
                            value: adult,
                        }))}
                    />
                    <Select
                        style={{
                            width: 120,
                        }}
                        value={secondRoom}
                        onChange={onsecondRoomChange}
                        options={roomes.map((room) => ({
                            label: room + " Room",
                            value: room,
                        }))}
                    />
                </Space>
            </div>
            <div className="formSearch">
                <button className="btn-search" onClick={handleSubmit}>Search</button>
            </div>
        </div>
            <div className="bottomHomepage">
                <img src={brand1} className="brand-img" alt="hotel" />
                <img src={brand2} className="brand-img" alt="hotel" />
                <img src={brand3} className="brand-img" alt="hotel" />
                <img src={brand4} className="brand-img" alt="hotel" />
                <img src={brand5} className="brand-img" alt="hotel" />
                <img src={brand6} className="brand-img" alt="hotel" />
            </div>
        </div>
    );
}


export default Homepage;