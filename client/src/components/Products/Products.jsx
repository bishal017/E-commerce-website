import "./Products.scss";
import Product from './Product/Product'
const Products = ({products,innerPage,headingText}) => {
    return <div className="products-container">
        {innerPage!==1  && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                {/* {products.data.map(item=>(
                    <Product key={item.id} id={item.id} data={item.img[0]} />
                ))} */}
                    
                {products?.data?.length > 0 ? (
                    products.data.map((item) => (
                        <Product key={item.id} id={item.id}  data={item} />
                    ))
                ) : (
                    <p>No categories available</p>
                )}
                
                {/* <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/> */}
            </div>
    </div>;
};

export default Products;
