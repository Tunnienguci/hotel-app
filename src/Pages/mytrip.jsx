import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Assets/Styles/mytrip.css"
import React from "react";
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const dataRoom = [
    {
        bookingNumber: 1,
        hotelName: "Hotel 1",
        roomType: "Room 1",
        checkIn: "2021-01-01",
        checkOut: "2021-01-02",
        price: 1000000,
        status: "Pending"
    }
];



function MyTrip() {
  return (
    <div className="myTrip">
        <Header />
            <div className="myTrip-content">
                <h1>My Trips</h1>
                <Table className="tableData" dataSource={dataRoom}>
                    <Column title="Booking Number" dataIndex="bookingNumber" key="bookingNumber" />
                    <Column title="Hotel Name" dataIndex="hotelName" key="hotelName" />
                    <Column title="Room Type" dataIndex="roomType" key="roomType" />
                    <Column title="Check In" dataIndex="checkIn" key="checkIn" />
                    <Column title="Check Out" dataIndex="checkOut" key="checkOut" />
                    <Column title="Price" dataIndex="price" key="price" />
                    <Column title="Status" dataIndex="status" key="status" render={status => (
                        <>
                            {status === 'Pending' ? (
                                <Tag color="warning">{status}</Tag>
                            ) : (
                                <Tag color="success">{status}</Tag>
                            )}
                        </>
                    )} />
                    <Column title="Action" key="action" render={(text, record) => (
                        <Space size="middle">
                            <a>Cancel</a>
                        </Space>
                    )} />
                </Table>
            </div>
        <Footer />
    </div>
  );
}
export default MyTrip;