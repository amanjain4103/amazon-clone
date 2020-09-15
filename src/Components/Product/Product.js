import React , {useState} from "react";
import {useStateValue} from "../../StateProvider";
import {Link, useHistory} from "react-router-dom";

import "./Product.css"

const Product = (props) => {

    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    const [addingMe,setAddingMe] = useState("Add to basket");

    const addToBasket = () => {
        //dispatch  item into data layer
        
        setAddingMe("adding ...");

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:props.id,
                title:props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })

        setTimeout(() => { setAddingMe("added ") },500);
        setTimeout(() => { setAddingMe("Add to basket") },800);
        
    }

    const viewThisProduct = () => {
        
        dispatch({
            type:"SET_PRODUCT_VIEW",
            item: {
                id:props.id,
                title:props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
                description: props.description,
                category: props.category
            }
        })

        history.push("/product-view")
    }

    return (
        <div className="product">
            <div key={props.id} className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(props.rating).fill().map((_, i)=> {
                            return <p key={i}>⭐</p>
                        })
                    }
                </div>
            </div>
            
            <img src={props.image} />
            
            <div className="product__buttons">
                <button onClick={viewThisProduct}>View</button>
                <button onClick={addToBasket}>{addingMe}</button>
            </div>
            

        </div>
    )
}

export default Product;