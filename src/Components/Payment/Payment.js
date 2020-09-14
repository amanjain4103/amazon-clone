import React, { useState, useEffect } from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import {useStateValue} from "../../StateProvider";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {getBasketTotal} from "../../reducer";
import axios from "../../axios";
import {db} from "../../firebase.js";


const Payment = () => {

    
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState()
    const [succeded, setSucceded] = useState()
    const [processing, setProcessing] = useState()
    const [clientSecret, setClientSecret] = useState("");

    useEffect ( () => {
        // generate stripe secret which allows to charge the customer


        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                // converting x$ => x*100 => x$  1$ => Rs. 75
            });
            // console.log(response)
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>', clientSecret)
    // console.log('👱', user)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({error,paymentIntent}) => {
            // payment initent = payment confirmation
            
            if(!error) {
                db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            
                
                setSucceded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET"
                })

                history.replace("/orders")   
            }else {
                console.log(error);
            }
        })
        .catch((err) => console.log(err))
    }

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }


    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                   Checkout {
                       <Link to="/checkout">{basket?.length} items</Link>
                   } 
                </h1>

                <div className="payment__section" >
                    <div className="payment__title">
                        <h3>Payment Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>housing board, Banswara</p>
                        <p>Rajasthan</p>
                        <p>India</p>
                    </div>
                </div>
                
                <div className="payment__section" >
                    <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                         {
                             basket.map(item => {
                                 return <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={parseInt((item.price)%5) || 5}
                                        /> 
                                 
                            })
                         }
                    </div>
                </div>
                
                <div className="payment__section" >
                    <div className="payment__title">
                         <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                         <form onSubmit={handleSubmit}>
                             <CardElement onChange={handleChange}/>

                             <div className="payment__priceContainer">
                                 <CurrencyFormat
                                    renderText={(value) => {
                                        return <h3>Order Total: {value}</h3>
                                    }}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                 />
                                 <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>processing</p> : 
                                      "Buy Now"}</span>
                                 </button>
                             </div>
                                
                                {/* error */}
                                {error && <div>error</div>}

                         </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment;