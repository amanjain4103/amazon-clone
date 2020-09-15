import React, { useState } from "react";
import Subtotal from "../Subtotal/Subtotal";
import {useStateValue} from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from 'react-flip-move';
import "./Checkout.css";

// implement react flip move
const Checkout = () => {

    
  const [{basket,user}, dispatch] = useStateValue();
  const [trackBasket,setTrackBasket] = useState(basket);

    return(
        <div className="checkout">
            <div className="checkout__left">
                <img 
                  className="checkout__ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                <div>
                    <h3>Hello ,{user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket!!!</h2>
                    <FlipMove>
                        {basket.map( (item,index) => (
                            <CheckoutProduct 
                                key={Date.now()+index}
                                id={item.id}
                                numberOfItems={item?.numberOfItems+1}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={parseInt((item.price)%5) || 5}
                            /> 
                        ))}
                    </FlipMove>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout;