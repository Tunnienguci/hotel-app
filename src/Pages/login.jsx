import "../Assets/Styles/login.css";
import logo from "../Assets/Images/logo.png";
import Google from "../Assets/Images/google.png";
import Apple from "../Assets/Images/apple.png";
import signInWithGoogle from "../Firebase";

function Login() {
        return (
            <div className="login">
                <div className="loginLeft">
                    <div className="loginHead">
                        <a href="/">
                            <h1>@homeStay</h1>
                            <img src={logo}></img>
                        </a>
                    </div>
                    <div className="loginBody">
                        <h1>Welcome to @homeStay</h1>
                        <p>Save up to $100 per night on your next hotel stay. Sign up and start planning your trip now.</p>
                        <div className="loginBodyInput">
                            <button onClick={signInWithGoogle}><img src={Google} /> Sign up with Google</button>
                            <button onClick={signInWithGoogle}><img src={Apple} /> Sign up with Apple</button>
                            <label id="email">Email address</label>
                            <input id="email" type="email" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div className="loginFooter">
                        <p>Copyright © 2023 - Tunnienguci</p>
                    </div>
                </div>
                <div className="loginRight">
                </div>
            </div>
        );
    }

    export default Login;