import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { context } from "../../utils/context";
const Cart = ({setShowCart}) => {
    const {CartItems,cartSubtotal} = useContext(context);
    const navigate = useNavigate()
    return <div className="cart-panel">
        <div className="opec-layer"></div>
        <div className="cart-content">
            <div className="cart-header" >
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setShowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            
            { !CartItems?.length && <div className="empty-cart">
                <BsCartX/>
                <span>No products in th cart.</span>
                <button className="return-cta" onClick={()=>navigate("/")}>RETURN TO SHOP</button>
            </div> }

            {!!CartItems.length &&<>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text-total">&#8377;{cartSubtotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </>
            }
        </div>
    </div>;
};

export default Cart;
