import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="add"
          src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a0e135b9-eb7c-4549-951f-ff4bad28ce8e.jpg"
          alt=""
        /> <br/><br/><br/><br/><hr/>

        <div className="mb-5">
          <h2>Shopping Cart </h2>
        </div>
        {basket.map(item => (

        <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
          />
          ))}

      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    
    </div>
  );
}

export default Checkout;
