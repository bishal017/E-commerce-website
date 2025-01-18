import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState ,useContext} from "react";
import { context } from "../../utils/context";
// import prod from "../../assets/products/earbuds-prod-2.webp"
const SingleProduct = () => {
    const [quantity,setQuantity]=useState(1);
    const {id} = useParams();
    const {handleAddToCart}=useContext(context)
    const {data} = useFetch(`/api/products?populate=*&filters[id]=${id}`)
    if(!data)
        return
    const product = data.data[0];

    const increment = ()=>{
        setQuantity((prev)=>prev+1);
    }
    const decrement = ()=>{
        if(quantity>1)
        {
             setQuantity((prev)=>prev-1);
        }
    }

    
    return <div className="single-product-main-container">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL + product.img[0].url} alt="image not found" />
                </div>
                <div className="right">
                    <span className="name">{product.title}</span>
                    <span className="price">&#8377;{product.price} </span>
                    <span className="desc">{product.desc}</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={decrement}>-</span>
                            <span>{quantity}</span>
                            <span onClick={increment}>+</span>
                        </div>
                        <button className="add-to-cart-buttons" onClick={()=>{
                            handleAddToCart(product,quantity)
                            setQuantity(1)
                        }}>
                            <FaCartPlus/>
                            ADD TO CART
                        </button>
                    </div>
                    <span className="devider"/>

                    <div className="info-item">
                        <span className="text-bold">
                            Category:{" "}
                            <span>{product.catagories[0].title}</span>
                        </span>

                        <span className="text-bold">
                            Share
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
            <RelatedProducts productId ={id} catagoryId ={product.catagories[0].id}/>
        </div>
    </div>;
};

export default SingleProduct;
