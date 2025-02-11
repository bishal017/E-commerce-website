import "./Newsletter.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa"
const Newsletter = () => {
    return <div className="news-letter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for latest updates and offer</span>
            <div className="form">
                <input type="text"placeholder="email address" />
                <button>Subscribe</button>
            </div>
            <div className="text">will be used in accordance with our privacy policy</div>
            <div className="social-icons">
                <div className="icons">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icons">
                    <FaTwitter size={14}/>
                </div>
                <div className="icons">
                    <FaInstagram size={14}/>
                </div>
                <div className="icons">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
