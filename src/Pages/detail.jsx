import Header from '../Components/Header';
import '../Assets/Styles/detail.css';
import * as React from 'react';
import { Image } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import { ContainerOutlined } from '@ant-design/icons';
import { CarOutlined } from '@ant-design/icons';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import dataHotel from '../Data/hotel.json';


function detail() {
    const url = window.location.href;
    const urlStartSplit = url.split('?hotel=');
    const urlEndSplit = urlStartSplit[1].split('&checkout=');
    const hotel = url.split('?hotel=')[1].split('&room=')[0];
    const room = url.split('&room=')[1].split('&checkin=')[0];
    const checkin = url.split('&checkin=')[1].split('&checkout=')[0];
    const checkout = url.split('&checkout=')[1].split('&adult=')[0];

    // Bỏ dấu %20 thành khoảng trắng
    const hotelName = hotel.replace(/%20/g, ' ');

    // Lấy ra thông tin của khách sạn
    const hotelData = dataHotel.filter((item) => item.name === hotelName);
    return (
        <div className='detail'>
            <Header />

            {hotelData && hotelData.map((item) => (
                <div className='detailBody'>
                <div className='detailBodyTitle'>
                    <h1>{hotelName}</h1>
                    <h2>{item.city.replace(/([A-Z])/g, ' $1').trim()}, {item.country}</h2>
                    <p>Rating: {item.rate}/5</p>
                </div>
                <div className='detailBodyImage'>
                    <div className='detailBodyImageLeft'>
                        <Image
                            width={700}
                            height={500}
                            src="error"
                            fallback={item.album[0]}
                        />
                    </div>
                    <div className='detailBodyImageRight'>
                        <Image
                            width={450}
                            height={250}
                            fallback={item.album[1]}
                        /><Image
                            width={450}
                            height={250}
                            fallback={item.album[2]}
                        />
                    </div>
                </div>
                <div className='detailBodyContent'>
                    <h1>Overview</h1>
                    <p>
                        {hotelName} is one of the most popular hotels in {item.city.replace(/([A-Z])/g, ' $1').trim()}. This place has been experienced and appreciated by famous people in the world. With the famous location of {item.city.replace(/([A-Z])/g, ' $1').trim()}, we believe that {hotelName} will help you have great experiences when visiting {item.country} in general and {item.city.replace(/([A-Z])/g, ' $1').trim()} in particular.
                    </p>
                </div>
                <div className='detailLocation'>
                    <h1>Room</h1>
                    <div className='detailLocationRoom'>
                        <Card
                            style={{
                                width: 300,
                            }}
                            cover={
                                <img height="250"
                                    src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/194/2021/02/12154220/original-Advantage-12-700x700.jpg"
                                />
                            }
                            actions={[
                                <button className='bookNow'>
                                    BOOK NOW
                                </button>
                            ]}
                        >
                            <div className='detailLocationRoomTitle'>
                                <h1>Deluxe Room</h1>
                                <hr />
                                <ul>
                                    <li><WifiOutlined />  Free Wifi</li>
                                    <li><CarOutlined />  Parking</li>
                                    <li><CustomerServiceOutlined />  Services 24/7</li>
                                    <li><ContainerOutlined />  Free Cancellation</li>
                                </ul>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: 300,
                            }}
                            cover={
                                <img height="250"
                                    src="https://www.rydges.com/accommodation/sydney-nsw/camperdown/wp-content/uploads/sites/6/2019/03/Rydges-Camperdown-Deluxe-Twin-Room-Beds.jpg"
                                />
                            }
                            actions={[
                                <button className='bookNow'>
                                    BOOK NOW
                                </button>
                            ]}
                        >
                            <div className='detailLocationRoomTitle'>
                                <h1>Deluxe Twin Room</h1>
                                <hr />
                                <ul>
                                    <li><WifiOutlined />  Free Wifi</li>
                                    <li><CarOutlined />  Parking</li>
                                    <li><CustomerServiceOutlined />  Services 24/7</li>
                                    <li><ContainerOutlined />  Free Cancellation</li>
                                </ul>
                            </div>
                        </Card>
                        <Card
                            style={{
                                width: 300,
                            }}
                            cover={
                                <img height="250"
                                    src="https://www.rydges.com/accommodation/sydney-nsw/camperdown/wp-content/uploads/sites/6/2019/03/0047-Rydges-Camperdown-20190311.jpg"
                                />
                            }
                            actions={[
                                <button className='bookNow'>
                                    BOOK NOW
                                </button>
                            ]}
                        >
                            <div className='detailLocationRoomTitle'>
                                <h1>Family Room</h1>
                                <hr />
                                <ul>
                                    <li><WifiOutlined />  Free Wifi</li>
                                    <li><CarOutlined />  Parking</li>
                                    <li><CustomerServiceOutlined />  Services 24/7</li>
                                    <li><ContainerOutlined />  Free Cancellation</li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default detail;