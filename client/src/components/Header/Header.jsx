import {useEffect,useState,useContext} from "react";
import {useNavigate} from "react-router-dom";

// those are react icons from react icon libarary like home ,menu etc
import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";


import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {context} from "../../utils/context";



import "./Header.scss";
import { convertLength } from "@mui/material/styles/cssUtils";

const Header = () => {
    const [scrolled,setScrolled]=useState(false);
    const [showCart,setShowCart]=useState(false);
    const [showSearch,setShowSearch]=useState(false);
    const navigate = useNavigate()
    const {cartCount} =useContext(context)
    const handleScroll = ()=>{
        const offset = window.scrollY;
        if(offset>200)
        {
            setScrolled(true);
        }
        else
        {
            setScrolled(false);
        }

    }
    //use effect is a hook in react js.when a component is render,1st time useEffect is called
    
    useEffect(()=>{
            window.addEventListener("scroll",handleScroll);
    },[]);
    return (
        
    <>
    <header className={`main-header ${scrolled?"sticky-header":""}`}>
        <div className="header-content">
            <ul className="left">
                <li onClick={()=>navigate("/")}>Home</li>
                <li>About</li>
                <li onClick={()=>navigate("/category/2")}>Categories</li>
            </ul>
            <div className="center" onClick={()=>navigate("/")}>MYSROTE</div>
            <div className="right">
                <TbSearch onClick={()=> setShowSearch(true)} />
                <AiOutlineHeart />
                <span className="cart-icon" onClick={()=> setShowCart(true)}>
                    <CgShoppingCart />
                    {cartCount===0?<></>:<span>{cartCount}</span>}
                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
    )
};

export default Header;
