
import React, { useEffect } from "react";

import {  Routes, Route } from "react-router-dom";

import "./App.css"
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
import Nav2 from "./Nav2";

const promise = loadStripe(
  "pk_test_51LyihhAh3lVK1KVSookdzj0qmmMLSRyTb12Gfgyxmd1gx5UpgrLvJZnkQgNjJnh8D0CpoTNWcUHDdELwTdJCwvTd00Q8IcfinM"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">

    <Routes>
    <Route path="/" element={<section> <Header/><Nav2/>  <Home/> <Footer/> </section>}/>
        
          <Route path="/checkout" element={<section> <Header/><Nav2/> <Checkout/><Footer/></section>}/>
          <Route path="/orders" element={<section> <Header/><Nav2/> <Orders/><Footer/></section>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<section> <Header/><Nav2/> <Elements stripe={promise}><Payment/></Elements><Footer/></section>}/>

       
        


      
    </Routes>
    </div>

  );
}

export default App;
