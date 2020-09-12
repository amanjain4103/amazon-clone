import React from "react";
import {useStateValue} from "../../StateProvider";
import "./ProductView.css";

const ProductView = () => {
    
    const [{productToBeViewed}, dispatch] = useStateValue();

    const addToBasketFromProductView = () => {
        //dispatch  item into data layer
        
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:productToBeViewed.id,
                title:productToBeViewed.title,
                image: productToBeViewed.image,
                price: productToBeViewed.price,
                rating: productToBeViewed.rating
            }
        })
        
    }

    return (
        <div className="productView">
            {
                productToBeViewed.title ?
                    <>
                        <div className="productView__image"> 
                            <img 
                                src={productToBeViewed.image}
                            />
                        </div>

                        <div className="productView__info">

                            <div className="productView__infoTop">
                                <h1>{productToBeViewed.title}</h1>
                                <p>
                                    <small>$</small>
                                    <strong>{productToBeViewed.price}</strong>
                                </p>
                                <div className="productView__rating">
                                    {
                                        Array(productToBeViewed.rating).fill().map((_, i)=> {
                                            return <p key={i}>⭐</p>
                                        })
                                    }
                                </div>
                                <div className="productView__widgets">
                                    <div className="productView__singleWidget">
                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png"
                                        />
                                        <p><strong>No-contact Deliver</strong></p>
                                    </div>

                                    <div className="productView__singleWidget">
                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
                                        />
                                        <p><strong>10 days replacement</strong></p>
                                    </div>

                                    <div className="productView__singleWidget">
                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
                                        />
                                        <p><strong>Amazon delivered</strong></p>
                                    </div>

                                    <div className="productView__singleWidget">
                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
                                        />
                                        <p><strong>1 year warrenty</strong></p>
                                    </div>

                                </div>
                                <div className="productView__description">
                                    {productToBeViewed.description}
                                </div>
                            </div>
                            
                            <div className="productView__infoBottom">
                                <button onClick={addToBasketFromProductView}>Add to basket</button>
                            </div>
                            
                        </div>
                    </>
                // render everything 
                : 
                <>
                    <div className="productView__nothingFound">
                        <h1>OOPS!!! Go back Click on view Button of a Product</h1>
                    </div>
                </>
                

            }
        </div>
    )
}

export default ProductView;
// now productToBeViewed has all needed data
// also consider when its empty at starting