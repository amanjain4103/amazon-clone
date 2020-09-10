import React from "react";
import {useStateValue} from "../../StateProvider";
import "./CheckoutProduct.css"

const CheckoutProduct = (props) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        // remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} />

            <div className="checkoutProduct__info">
                <div className="checkoutProduct__infoTop">
                    <p className="checkoutProduct__title">
                        {props.title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(props.rating).fill().map((_, i) => {
                            return (<p>⭐</p>)
                        })}
                    </div>
                </div>

                <button onClick={() => removeFromBasket(props.id)}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct;