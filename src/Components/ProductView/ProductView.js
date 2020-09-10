import React from "react";
import {useStateValue} from "../../StateProvider";
import "./ProductView.css";

const ProductView = () => {
    
    const [{productToBeViewed}, dispatch] = useStateValue();
    console.log(productToBeViewed);

    return (
        <div className="productView">
            {
                // now productToBeViewed has all needed data 
                // also consider when its emoty at starting
            }
        </div>
    )
}

export default ProductView;