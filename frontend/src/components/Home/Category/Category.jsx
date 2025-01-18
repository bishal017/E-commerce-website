import "./Category.scss";
import {useNavigate} from "react-router-dom"
// import cat1 from "../../../assets/category/cat-1.jpg" 
const Category = ({categories}) => {

    const navigate = useNavigate();
    return <div className="shop-by-categories">
        <div className="categories">
            {/* {categories.data.map((item)=>(
                <div key={item.id} className="category">
                     <img src={process.env.REACT_APP_DEV_URL + item.img.url} alt="" />
                </div>
            ))}          */}
                {categories?.data?.length > 0 ? (
                    categories.data.map((item) => (
                        <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                            <img
                                src={process.env.REACT_APP_DEV_URL + item.img.url}
                                alt=""
                            />
                        </div>
                    ))
                ) : (
                    <p>No categories available</p>
                )}

       
        </div>
        
    </div>;
};

export default Category;
