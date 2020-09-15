import React, {useState, useEffect} from "react";
import {db} from "../../firebase";
import Order from "../Order/Order";
import { useStateValue } from "../../StateProvider";
import "./Orders.css";
import {Link} from "react-router-dom";

const Orders = () => {

    const [{user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
        try {
            if(user) {
                db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                    ))
            } else {
                setOrders([])
            }
        }
        catch(err) {
            // console.log("user not found")
        }
      
  
    }, [user])

    
  
      return (
        <div className='orders'>
              
            {
                !user
                ?
                (
                    <div className="orders__error">
                        <h2 className="orders__errorHeading">You Are Not Signed In!</h2>
                        <div>
                            <Link to="/login"><button className="orders__amzStyleButton">Log In</button></Link>
                            <Link to="/"><button className="orders__amzStyleButton">Back To Home</button></Link>
                        </div>
                    </div>
                )
                :
                (
                    <div className="orders__success">
                        <h2 className="orders__heading">Your Orders</h2>
                        {
                            orders?.map(order => (
                                <Order order={order} />
                            ))
                        }
                    </div>
                )

            }
        </div>
      )
}

export default Orders;