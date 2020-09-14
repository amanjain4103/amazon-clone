import React, {useState} from "react";
import {useStateValue} from "../../StateProvider";
import "./ProductView.css";
import ReactImageZoom from 'react-image-zoom';


const ProductView = () => {

    
    const [{productToBeViewed}, dispatch] = useStateValue();

    const [windowWidth,setwindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setwindowWidth(window.innerWidth);
    })

    const imageZoomPropsForBigScreen = {
        width: document.getElementById("img-container")?.style.width,
        height: 400,
        zoomWidth: document.getElementById("img-container")?.style.width,
        offset:{
            "vertical": 0,
            "horizontal": 20
        },
        img: productToBeViewed.image
    };

    const imageZoomPropsForSmallScreen = {
        width: document.getElementById("img-container")?.style.width,
        height: 200,
        zoomWidth: document.getElementById("img-container")?.style.width, 
        zoomPosition: "original",
        img: productToBeViewed.image
    };

    const imageZoomPropsForMediumScreen = {
        width: document.getElementById("img-container")?.style.width,
        height: 300,
        zoomWidth: document.getElementById("img-container")?.style.width, 
        zoomPosition: "original",
        img: productToBeViewed.image
    };


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
                        <div id="img-container" className="productView__image"> 
                            
                            {
                                windowWidth < 500 
                                ?
                                (
                                    <ReactImageZoom {...imageZoomPropsForSmallScreen} />
                                )
                                :
                                (
                                    windowWidth >500 && windowWidth <700
                                    ?
                                    (<ReactImageZoom {...imageZoomPropsForMediumScreen} />)
                                    :
                                    (
                                        windowWidth > 700 && <ReactImageZoom {...imageZoomPropsForBigScreen} />
                                    )
                                )
                                
                                // <img 
                                //     src={productToBeViewed.image}
                                // />


                            }
                            
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