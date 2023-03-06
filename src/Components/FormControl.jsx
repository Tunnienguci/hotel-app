import * as React from "react";
import { useState } from "react";
import "../Assets/Styles/homepage.css";
import { DatePicker, Space } from "antd";
import { Select } from "antd";

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

function FormControl() {
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
    return(
    <div className="formHomepage">
        <div className="formLocation">
            <h1>Location</h1>
            <Space wrap>
                <Select
                    defaultValue="Where are you going?"
                    style={{
                        width: 300,
                    }}
                    onChange={handleProvinceChange}
                    options={provinceData.map((province) => ({
                        options: cityData[province].map((city) => ({
                            value: city,
                            label: city + ", " + province,
                        })),
                        label: province,
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
            <button className="btn-search" type="button">Search</button>
        </div>
    </div>
    );
}

export default FormControl;
