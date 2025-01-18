import { useEffect ,useContext} from "react";
import AppContext, { context } from "../../utils/context";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api"
const Home = () => {
    const {categories,setCategories,products,setProducts}=useContext(context);
    useEffect(()=>{
        getCategories();
        getProducts();
    },[])
    const getCategories =()=>{
        //we have to provide here endpoint url . for images we have to do populate.*
        fetchDataFromApi("/api/catagories?populate=*").then((res)=>{
            console.log(res)
            setCategories(res)
        })
    }

    const getProducts =()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
            console.log(res)
            setProducts(res)
        })
    }
            
   
    return <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products headingText="Popular products" products={products}/>
                </div>
            </div>
            
    </div>;
};

export default Home;
