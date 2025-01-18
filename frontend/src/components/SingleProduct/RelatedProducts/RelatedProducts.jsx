import Products from "../../Products/Products";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({productId,catagoryId}) => {
    const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[catagories][id][$eq]=${catagoryId}
        &pagination[start]=0&pagination[limit]=4`)
    return <div className="related-products">
        <Products headingText="Related products" products={data}/>
    </div>;
};

export default RelatedProducts;
