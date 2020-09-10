import React, {useEffect, useState} from 'react';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import Login from "./Components/Login/Login";
import ProductView from "./Components/ProductView/ProductView";
import './App.css';
import { auth } from './firebase.js';


function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        // user is just logged in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else {
        // user logged out
        dispatch({
          type:"SET_USER",
          user: null
        })

      }
    })

    fetch(`https://fakestoreapi.com/products/`)
      .then(res=>res.json())
      .then(productsArr=>{

        dispatch({
          type:"ADD_PRODUCTS",
          item: productsArr
        })
        
      })
      .catch(err => alert(err))
      
  },[])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/product-view">
            <Header />
            <ProductView />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
