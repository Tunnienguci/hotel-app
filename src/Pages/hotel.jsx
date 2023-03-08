import '../Assets/Styles/hotel.css';
import '../Assets/Styles/homepage.css';
import Header from '../Components/Header';
import * as React from 'react';
import { Card } from 'antd';
import FormControl from '../Components/FormControl';
import dataHotel from '../Data/hotel.json';



// import all images want to use in this page here 
import noData from '../Assets/Images/giphy.gif';

import hn1 from '../Assets/Images/Homestay/Vietnam/hanoi-1.jpg';
import hn2 from '../Assets/Images/Homestay/Vietnam/novotel-hn.jpg';
import hn3 from '../Assets/Images/Homestay/Vietnam/sherathon-hn.jpg';
import hn4 from '../Assets/Images/Homestay/Vietnam/daewoo-hn.jpg';
import hn5 from '../Assets/Images/Homestay/Vietnam/jw-hn.jpg';
import hn6 from '../Assets/Images/Homestay/Vietnam/inter-hn.jpg';
import dn1 from '../Assets/Images/Homestay/Vietnam/dn1.jpg';
import dn2 from '../Assets/Images/Homestay/Vietnam/dn2.jpg';
import dn3 from '../Assets/Images/Homestay/Vietnam/dn3.jpg';
import dn4 from '../Assets/Images/Homestay/Vietnam/dn4.jpg';
import dn5 from '../Assets/Images/Homestay/Vietnam/dn5.jpg';
import dn6 from '../Assets/Images/Homestay/Vietnam/dn6.jpg';
import hcm1 from '../Assets/Images/Homestay/Vietnam/lm-hcm.jpg';
import hcm2 from '../Assets/Images/Homestay/Vietnam/rex-hcm.jpg';
import hcm3 from '../Assets/Images/Homestay/Vietnam/ms-hcm.jpg';
import hcm4 from '../Assets/Images/Homestay/Vietnam/cr-hcm.jpg';
import hcm5 from '../Assets/Images/Homestay/Vietnam/rr-hcm.jpg';
import sp1 from '../Assets/Images/Homestay/Vietnam/sp1.jpg';
import sp2 from '../Assets/Images/Homestay/Vietnam/sp2.jpg';
import sp3 from '../Assets/Images/Homestay/Vietnam/sp3.jpg';
import pq1 from '../Assets/Images/Homestay/Vietnam/pq1.jpg';
import pq2 from '../Assets/Images/Homestay/Vietnam/pq2.jpg';
import pq3 from '../Assets/Images/Homestay/Vietnam/pq3.jpg';
import nt1 from '../Assets/Images/Homestay/Vietnam/nt1.jpg';
import nt2 from '../Assets/Images/Homestay/Vietnam/nt2.jpg';
import nt3 from '../Assets/Images/Homestay/Vietnam/nt3.jpg';
import hu1 from '../Assets/Images/Homestay/Vietnam/hu1.jpg';
const image = {hn1,hn2,hn3,hn4,hn5,hn6,dn1,dn2,dn3,dn4,dn5,dn6,hcm1,hcm2,hcm3,hcm4,hcm5,sp1,sp2,sp3,pq1,pq2,pq3,nt1,nt2,nt3,hu1};



const hotel = dataHotel;


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

    //Thêm khoảng trắng vào trước các chữ in hoa của city name
    const cityFormat = city.replace(/([A-Z])/g, ' $1').trim();

    const handleCheck = (e) => {
        const hotelRoom = {
            city: city,
            room: room,
            checkin: checkin,
            checkout: checkout,
            hotel: e.target.value,
            total: total,
        };
        localStorage.setItem('hotelRoom', JSON.stringify(hotelRoom));
        // Tạo link đến trang booking khi click vào button book
        window.location.href = `/detail?hotel=${e.target.value}&room=${room}&checkin=${checkin}&checkout=${checkout}`;
    }

    
   
    
    return (
        <div className="hotel">
            <Header />
            <FormControl />
            <div className="hotelGroup">
                <div className="hotelSort">
                <h3>Filter by:</h3>
                <div className="hotelSortItem">
                    <div className='SearchItem'>
                        <input type="search" name="search" placeholder='Hotel Name' />
                    </div>
                    <div className="PriceGroup">
                        <form>
                            <table>
                                <tr>
                                    <th colspan="2">Price Group</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="0to100" name="0to100" value="100" /></td>
                                    <td><label for="0to100"> $0 - $100</label></td>

                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="200to400" name="200to400" value="400" /></td>
                                    <td><label for="200to400"> $200 - $400</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="400to600" name="400to600" value="600" /></td>
                                    <td><label for="400to600"> $400 - $600</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="700andMore" name="700andMore" value="700" /></td>
                                    <td><label for="700andMore"> $150 - $200</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></td>
                                    <td><label for="vehicle1"> $700 and more</label></td>
                                </tr>
                            </table>
                        </form>
                    </div> 
                    <div className="Cancellation">
                        <form>
                            <table>
                                <tr>
                                    <th colspan="2">Cancellation:</th>  
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="freeCancellation" name="freeCancellation" value="freeCancellation" /></td>
                                    <td><label for="freeCancellation">Free cancellation</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="flexibleCancellation" name="flexibleCancellation" value="flexibleCancellation" /></td>
                                    <td><label for="flexibleCancellation">Flexible cancellation</label></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="Rating">
                        <form>
                            <table>
                                <tr>
                                    <th colspan="2">Rating:</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="5star" name="5star" value="5star" /></td>
                                    <td><label for="5star">5 star</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="4star" name="4star" value="4star"/></td>
                                    <td><label for="4star">4 star</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="3star" name="3star" value="3star" /></td>
                                    <td><label for="3star">3 star</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="2star" name="2star" value="2star" /></td>
                                    <td><label for="2star">2 star</label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="1star" name="1star" value="1star" /></td>
                                    <td><label for="1star">1 star</label></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
                </div>
                <div className="hotelList">
                    <div className="hotelListTitle">
                        <p>Homestay in <b>{cityFormat}</b> | Date: <b>{checkin} </b> to <b>{checkout}</b></p>
                        <p>
                            {hotelFilter.length} homestay available
                        </p>
                    </div>
                    {hotelFilter.length > 0 ? hotelFilter.map((hotel) => {
                        total = hotel.price * days * room;
                        return (
                            <Card
                            className='hotelCard'
                            hoverable
                            cover={<img alt="example" src={image[hotel.image]} />}
                            >
                            <div className="hotelCardInfo">
                                <h1>{hotel.name}</h1>
                                <h3>{hotel.city.replace(/([A-Z])/g, ' $1').trim()}, {hotel.country}</h3>
                                <h4>${total} for 2 room </h4>
                                <p>${hotel.price} /night /room</p>
                                <p>All including taxes and fees</p>
                                <button className="hotelCardButton" value={hotel.name} onClick={handleCheck} >See available rooms</button>
                            </div>
                            </Card>
                        )
                    }) : (
                        <div className="noData">
                            <img src={noData} alt="noData" />
                            <h3>Sorry, we don't have data for this area at the moment.</h3>
                            <p>
                                Please try another search or check back later.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Hotel;