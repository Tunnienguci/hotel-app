import '../Assets/Styles/hotel.css';
import '../Assets/Styles/homepage.css';
import Header from '../Components/Header';
import * as React from 'react';
import { Card } from 'antd';
import FormControl from '../Components/FormControl';
import Images1 from '../Assets/Images/Homestay/Vietnam/Dalat-1.jpg';
import Images2 from '../Assets/Images/Homestay/Vietnam/Dalat-2.jpg';
import Images3 from '../Assets/Images/Homestay/Thailand/bangkok-1.jfif';

const hotel = [
    {
        name: "Dalat Homestay",
        city: "Hanoi",
        country: "Vietnam",
        price: 100,
        image: Images1
    },
    {
        name: "Wonderful Homestay",
        city: "Hanoi",
        country: "Vietnam",
        price: 200,
        image: Images2
    },
    {
        name: "Bangkok City Homestay",
        city: "Bangkok",
        country: "Thailand",
        price: 300,
        image: Images3
    },
]

function Hotel() {
    const url = window.location.href;
    const urlStartSplit = url.split('&room='); //Split url by adult
    const urlEndSplit = urlStartSplit[1].split('&checkin='); //Split url by checkin
    const city = urlStartSplit[0].split('city=')[1]; //Get city
    const room = urlEndSplit[0];
    const checkin = urlEndSplit[1].split('&checkout=')[0]; //Get checkin
    const checkout = urlEndSplit[1].split('&checkout=')[1]; //Get checkout
    let total = 0;
    const days = (Date.parse(checkout) - Date.parse(checkin)) / 86400000; //Calculate days
    const hotelFilter = hotel.filter((hotel) => hotel.city === city);

    return (
        <div className="hotel">
            <Header />
            <FormControl />
            <div className="hoteGroup">
                <div className="hotelSort">

                </div>
                <div className="hotelList">
                    <div className="hotelListTitle">
                        <p>Homestay in <b>{city}</b> | Date: <b>{checkin} </b> to <b>{checkout}</b></p>
                        <p>
                            {hotelFilter.length} homestay available
                        </p>
                    </div>
                    {hotelFilter.map((hotel) => (
                        total = hotel.price * days * room,
                        <Card
                            className='hotelCard'
                            hoverable
                            cover={<img alt="Image" src={hotel.image} />}
                        >
                            <div className="hotelCardInfo">
                                <h1>{hotel.name}</h1>
                                <h3>{hotel.city}, {hotel.country}</h3>
                                <h4>${total} for 2 room </h4>
                                <p>${hotel.price} /night /room</p>
                                <p>All including taxes and fees</p>
                                <button className="hotelCardButton">See available rooms</button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Hotel;