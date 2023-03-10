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
import { Avatar } from 'antd';

const { RangePicker } = DatePicker;

const provinceData = [
    "Vietnam",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Laos",
    "Indonesia",
    "Myanmar",
    "Cambodia",
    "Philippines",
    "Brunei",
];

const cityData = {
    Vietnam: ["Hanoi", "HoChiMinh", "DaNang", "Sapa", "NhaTrang", "Hue", "PhuQuoc"],
    Thailand: ["Bangkok", "Pattaya", "Phuket"],
    Malaysia: ["KualaLumpur", "Penang", "Langkawi"],
    Singapore: ["Singapore"],
    Laos: ["Vientiane", "LuangPrabang", "Pakse"],
    Indonesia: ["Bali", "Jakarta", "Yogyakarta"],
    Myanmar: ["Yangon", "Mandalay", "Bagan"],
    Cambodia: ["SiemReap", "PhnomPenh", "Sihanoukville"],
    Philippines: ["Manila", "Cebu", "Boracay"],
    Brunei: ["BandarSeriBegawan"],
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



function Homepage() {
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

    const [citiesData, setCitiesData] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
    const onCityChange = (value) => {
        setCitiesData(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const onsecondCityChange1 = (value) => {
        setSecondCity(value);
    };

    const handleSubmit = () => {
        const data = {
            province: value,
            city: secondCity,
            room: secondRoom,
            checkin: dates[0].format("YYYY-MM-DD"),
            checkout: dates[1].format("YYYY-MM-DD"),
        };
        // console.log(data);
        window.location.href = "/hotel" + "?city=" + secondCity + "&room=" + secondRoom + "&checkin=" + dates[0].format("YYYY-MM-DD") + "&checkout=" + dates[1].format("YYYY-MM-DD");



    };

    return (
        <div className="homepage">
            <div className="header">
                <div className="leftHeader">
                    <h1>@homeStay</h1> <img src={logo}></img>
                </div>
                <div className="rightHeader">
                    {localStorage.getItem("user") ? (
                        <div className="user">
                            <Avatar size={30} src={localStorage.getItem("photo")}></Avatar>
                            <a href="/mytrip">My Trip</a>
                            <a id="nameTag" href="">{localStorage.getItem("name")}</a>
                            <a href="/logout">Logout</a>
                        </div>
                    ) : (
                        <div className="user">
                            <a href="/login">Login</a>
                        </div>
                    )}
                </div>
            </div>
            <div className="centerHomepage">
                <h1>Unlock Private Hotel Deals</h1>
                <p>All homestays in Southeast Asia get 30-75% off the best publicly available rates</p>
            </div>
            <div className="formHomepage">
                <div className="formLocation">
                    <h1>Location</h1>
                    <Space wrap>
                        <Select
                            defaultValue={provinceData[0]}
                            style={{
                                width: 150,
                            }}
                            required
                            onChange={onsecondCityChange1}
                            options={provinceData.map((province) => ({
                                label: province,
                                value: province,
                            }))}
                        />
                        <Select
                            defaultValue="Where are you going?"
                            required
                            style={{
                                width: 200,
                            }}
                            onChange={onsecondCityChange1}
                            options={citiesData.map((city) => ({
                                label: city.replace(/([A-Z])/g, ' $1').trim(),
                                value: city,
                            }))}
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
                            required
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
                            required
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
                            required
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