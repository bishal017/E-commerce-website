import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";
const Category = () => {
    const {id} =useParams()
    {console.log(id)}
    const {data} =useFetch(`/api/products?populate=*&filters[catagories][id]=${id}`)
  {console.log(data)}
    return <div className="category-main-content">
        <div className="layout">
            {/* <div className="category-title">{data[0].Catagories[0].title}Bishal</div> */}
            <Products innerPage={1} products={data}/>
        </div>
    </div>;
};

export default Category;
