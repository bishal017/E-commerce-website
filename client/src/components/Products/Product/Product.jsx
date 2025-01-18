import "./Product.scss";
import { useNavigate } from "react-router-dom";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Product = ({id,data}) => {
    const navigate = useNavigate()
    return <div className="product-card" onClick={()=>{navigate("/product/" + id)}}>
        <div className="thumbnail">
            <img src={process.env.REACT_APP_DEV_URL + data.img[0].url} alt="" />
        </div>
        {/* {console.log(data)} */}
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
            {/* &#8377; this is unicode for ruppe symbol */}
        </div>
    </div>;
};

export default Product;
