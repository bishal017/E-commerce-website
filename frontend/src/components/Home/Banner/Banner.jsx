import "./Banner.scss";
import Bannerimg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Repellat voluptatum 
                     sit deleniti! Nulla voluptatibus quod officia 
                     voluptates ipsam, odit nesciunt, 
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop now</div>
                    
                </div>
            </div>
            <img  className="banner-img" src={Bannerimg} alt="" />
        </div>
    </div>;
};

export default Banner;
