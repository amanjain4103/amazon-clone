import React, {forwardRef} from "react";
import {useStateValue} from "../../StateProvider";
import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";

const CheckoutProduct = forwardRef((props,ref) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
        // remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div ref={ref} key={props.id} className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} alt="ad"/>

            <div className="checkoutProduct__info">
                <div className="checkoutProduct__infoTop">
                    <p className="checkoutProduct__title">
                        {props.title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>

                        {
                            props.numberOfItems
                            ?
                            (<strong>{props.price} x ({props.numberOfItems})</strong>)
                            :
                            (<strong>{props.price} x (1)</strong>)
                        }
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(props.rating).fill().map((_, i) => {
                            return (<p key={i}>⭐</p>)
                        })}
                    </div>
                </div>
                
                {!props.hideButton && (
                    <button onClick={() => removeFromBasket(props.id)}>Remove from basket</button>
                )}
            </div>

        </div>
    )
})

export default CheckoutProduct;