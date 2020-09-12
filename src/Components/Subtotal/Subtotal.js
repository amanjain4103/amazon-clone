import React from "react";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../../StateProvider";
import {useHistory} from "react-router-dom";
import "./Subtotal.css";

const Subtotal = () => {

    const [{basket},dispatch] = useStateValue();
    const history = useHistory();

    const getBasketTotal = (basket) => {

        let subtotal = parseFloat(0);
        basket.map((item) => {
            subtotal+= parseFloat(item.price)
            return item;
        })
        return parseFloat(subtotal).toFixed(2);
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

            <button onClick={e => history.push("/payment")}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;