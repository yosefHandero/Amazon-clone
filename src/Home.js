import React from "react";
import "./Home.css";
import Product from "./Product";


import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from "react-bootstrap";



function Home() {

  


  return (
    <div className="home__wrapper">
      
    <div className="home">
      <div className="home__container">
        <div className="carausel__style">
            <Carousel >
                <Carousel.Item>
                    <img
                     src={'	https://m.media-amazon.com/images/I/614k8Qyb-XL._SX3000_.jpg'}
                     className={'d-block w-100'}
                     alt={''}
                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={'https://m.media-amazon.com/images/I/71eOo10BTQL._SX3000_.jpg'}
                    alt={''}
                    className={'d-block w-100'}

                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={'https://m.media-amazon.com/images/I/71h+l89BixL._SX3000_.jpg'}
                        alt={''}
                        className={'d-block w-100'}
                    />
               
                </Carousel.Item>
            </Carousel>

        </div>


   <div className="home__row ">
          <Product
            id="4903850"
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={399.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tE7IcuLmL._SL1500_.jpg"
          />
    
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          /> 
       
            <Product
        id="49538094"
        title="Norton 360 Deluxe, 2023 Ready, Antivirus software for 5 Devices with Auto Renewal - Includes VPN, PC Cloud Backup & Dark Web Monitoring [Download]"
        price={24.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/81PD0Uon23L._AC_SY741_.jpg"
      />

        </div>
      
    
        <div className="home__row mt-2">
          <Product
            id="23445930"
            title="
            Canon imageFORMULA R40 Office Document Scanner For PC and Mac, Color Duplex Scanning, Easy Setup For Office Or Home Use, Includes Scanning Software"
            price={269.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61gkTT1l2CS._AC_SL1500_.jpg"
          />  
          <Product
            id="49538094"
            title="GE Profile Automatic Espresso Machine + Milk Frother | Brew in 90 Seconds | 20 Bar Pump Pressure for Balanced Extraction | Five Adjustable Grind Size Levels | WiFi Connected for Customization | Black"
            price={499.0}
            rating={4}
            image="	https://images-na.ssl-images-amazon.com/images/I/31JOsj4gg9L._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
          />
        </div>

     

        <div className="home__row mt-4 ">
          <Product
            id="90829332"
            title="Sceptre Curved 27inch 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)"
            price={139.97}
            rating={4}
            image="	https://m.media-amazon.com/images/I/71-4ZeUWzqL._AC_SX522_.jpg"
          />
          
        </div>
        <div className="home__row mt-4">
        <Product
            id="49538094"
            title="LUKACY 6 Pack Large Metal Hair Claw Clips - 4 Inch Nonslip Big Nonslip gold hair clamps ,Perfect Jaw hair clamps for Women and Thinner, Thick hair styling,Strong Hold Hair,Fashion Hair Accessories,christmas gifts for women"
            price={9.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71P0b6yDZkL._SX466_.jpg"
          />       <Product
          id="49538094"
          title="Starbucks K-Cup Coffee Pods—Dark Roast Coffee—Sumatra for Keurig Brewers—100% Arabica—6 boxes (60 pods total)"
          price={27.69}
          rating={4}
          image="https://m.media-amazon.com/images/I/81sEF4wMXiL._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
        />        <Product
        id="12321341"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
        price={11.96}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />   
        </div>
        
        
        
      </div>
    </div>
      
    </div>
  );
}

export default Home;
