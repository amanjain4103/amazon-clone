import React from "react";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../../StateProvider";
import {useHistory} from "react-router-dom";
import "./Subtotal.css";


const Subtotal = () => {

    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();

    const getBasketTotal = (basket) => {

        let subtotal = parseFloat(0);
        basket.map((item) => {
            if(item.numberOfItems) {
                subtotal+= parseFloat(item.price * item.numberOfItems);
            }
            subtotal+= parseFloat(item.price)
            return item;
        })
        return parseFloat(subtotal).toFixed(2);
    }

    const handleProceedToCheckOut = () => {
        let total = getBasketTotal(basket);
        if(user) {
            if(total <= 0 ) {
                alert("The Specified amount is less Than the minimun checkout Limit!");
            }else if(total > 5000) {
                alert("The Shopping limit exceeded Please remove some Items from Basket!");
            }else {
                history.push("/payment");
            }
        }else {
            alert("You Need To Login First!!!")
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ( {basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> &nbsp;This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={handleProceedToCheckOut}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;