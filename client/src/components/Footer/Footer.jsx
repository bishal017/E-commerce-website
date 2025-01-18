import "./Footer.scss";
import React  from "react";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa"
import payment from "../../assets/payments.png"
const Footer = () => {
    return <div className="footer">
        <div className="footer-content">

            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti enim velit voluptatum, neque ullam perspiciatis distinctio assumenda repellat incidunt?
                </div>
            </div>

            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">III Dhanbad,Dhanbad,Jarkhand,820006</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">9876543210</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">store@gmail.com</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">SmartWatches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>

            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Term & conditions</span>
                <span className="text">cotact us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    MYSTORE 2024 CREATED BY BISHAL.PREMIUM E-COMERCE SOLUTIONS.
                </div>
                <img src={payment} alt="" />
            </div>
        </div>
    </div>;
};
export default Footer;
