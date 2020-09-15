import React from "react";
import Product from "../Product/Product";
import {useStateValue} from "../../StateProvider";
import "./ProductRow.css";


const ProductRow = (props) => {

    const [{products}, dispatch] = useStateValue();

    function loadProductsByCategory(category,numOfItems) {
        let counter = 0;
        return products.filter((product) => {
            return product.category === category.toLowerCase()
        }).map((product) => {
            counter++;
            if(counter > numOfItems) {
                return ""
            } 
            return (
                <Product
                   key={product.id}
                   id={product.id} 
                   category={product.category}
                   title={product.title} 
                   price={product.price} 
                   image={product.image}
                   description={product.description}
                   rating={parseInt((product.price)%5) || 5}
                />
            )
        })
    }

    return (
        <div className="productRow">


            <div className="productRow__info">
                {
                    props?.heading
                    ?
                    (<h2 className="productRow__category">{props.heading}</h2>)
                    :
                    (<h2 className="productRow__category">{props.category}</h2>)
                }
                
                {/* <button>Load More</button> */}
            </div>
            <div className="projectRow__container">
                {loadProductsByCategory(props.category,4)}
            </div>

        </div>
    )
}

export default ProductRow;