import '../Assets/Styles/globalStyle.css';
import Trust from '../Assets/Images/trust.png';

function footer()
{
    return (
        <div className="footer">
            <div className="footer-head">
                <div className="account">
                    <h3>Account</h3>
                    <ul>
                        <li>My Account</li>
                        <li>My Trip</li>
                    </ul>
                </div>
                <div className="about">
                    <h3>@homeStay</h3>
                    <ul>
                        <li>About Us</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: 098 1979 901</li>
                        <li>Email: tuanqc0712@gmail.com</li>
                    </ul>
                </div>
                <div className="social">
                    <img src={Trust} />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 @homeStay. All rights reserved.</p>
            </div>
        </div>
    );
}

export default footer;