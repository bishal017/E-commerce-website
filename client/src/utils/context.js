import {createContext,useEffect,useState} from "react";
import { useLocation } from "react-router-dom";
// import CartItem from "../components/Cart/CartItem/CartItem";

export const context =createContext();

const AppContext =({children})=> {
    const [categories,setCategories]=useState({});
    const [products,setProducts]=useState({});
    const [CartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartSubtotal,setCartSubtotal]=useState(0);
    const location = useLocation();

    useEffect(()=>{
        let subTotal =0;
        let itemInCart =0;
        // console.log(CartItems);
        for(let it in CartItems)
        {
            subTotal += CartItems[it].price * CartItems[it].quantity;
            itemInCart += CartItems[it].quantity;
        }
      setCartSubtotal(Math.round(subTotal));
      setCartCount(itemInCart);
    },[CartItems]);

    const handleAddToCart = (product,quantity)=>{
        let items = [...CartItems];
        let index = items.findIndex(p=>p.id === product.id)
        if(index!==-1)
        {
             items[index].quantity += quantity;
        }
        else{
            product.quantity =quantity;
            items = [...items,product];
        }

        setCartItems(items);
    };

    const handleRemoveFromCart = (product)=>{
        let items = [...CartItems]
        for(let item in items )
        {
            if(items[item].id === product.id)
               {
                    items.splice(item,1);
                    break;
               } 

        }
        setCartItems(items);
    };
    const handleCartProductQuantity = (type,product)=>{
        let items = [...CartItems];
        let index = items.findIndex(p=>p.id === product.id);
        if(type=== "inc")
        {
            items[index].quantity +=1;
        }else if(type === 'dec')
        {
            if(items[index].quantity >1)
            {
                items[index].quantity -=1;
            }
        }
        setCartItems(items);
    };
    return(
        <context.Provider 
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                CartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubtotal,
                setCartSubtotal,
                handleAddToCart,
                handleRemoveFromCart,
                handleCartProductQuantity
            }}>{children}</context.Provider>
    )
};

export default AppContext;