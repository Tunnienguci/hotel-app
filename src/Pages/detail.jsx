import Header from '../Components/Header';
import '../Assets/Styles/detail.css';
import * as React from 'react';
import { Image } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

function detail()
{
    return (
        <div className='detail'>
            <Header />
            <div className='detailBody'>
                <div className='detailBodyTitle'>
                    <h1>InterContinental Hanoi Westlake</h1>
                    <h2>Hanoi, Vietnam</h2>
                    <p>Rating: 5 Star hotel</p>
                </div>
                <div className='detailBodyImage'>
                    <div className='detailBodyImageLeft'>
                    <Image
                        width={700}
                        height={500}
                        src="error"
                        fallback="https://pix10.agoda.net/hotelImages/90776/0/0721cef12bb6e35a4ba5cdc5883144c5.jpg?ca=7&ce=1&s=1024x768"
                    />
                    </div>
                    <div className='detailBodyImageRight'>
                        <Image
                            width={450}
                            height={250}
                            fallback="https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432502-2x1"
                        /><Image
                            width={450}
                            height={250}
                            fallback="https://digital.ihg.com/is/image/ihg/intercontinental-hanoi-8359432536-2x1"
                        />
                    </div>
                </div>
                <div className='detailBodyContent'>
                    <h1>Overview</h1>
                    <p>
                        InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.
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
                            <Meta
                            title="King Room"
                            description="This is the description"
                            />
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
                            <Meta
                            title="Deluxe Twin Room"
                            description="This is the description"
                            />
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
                            <Meta
                            title="Family Room"
                            description="This is the description"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default detail;