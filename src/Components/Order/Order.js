import React from "react";
import "./Order.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

const Order = (props) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{props.order.id}</small>
            </p>
            {props.order.data.basket?.map((item) => (
                <CheckoutProduct 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={parseInt((item.price)%5) || 5}
                    hideButton
            /> 
            ))}

            <CurrencyFormat
              renderText={(value) => (
                <h3 className="order__total">Order Total: {value}</h3>
              )}
              decimalScale={2}
              value={props.order.data.amount /100}
              displayType={"text"}
              thoudsandSeparator={true}
              prefix={"$"}
            />
        </div>
    )
}

export default Order; 