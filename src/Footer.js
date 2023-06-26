import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer__wrapper">



           <div className="footer_header">
            
           <li><a href="#">Back to top</a></li>
                </div>

  
            <div className="footer container">
           
                <div className="footer-links-wrapper pb-5">
                 
                    <div className="links-wrapper one me-5 mt-1">
                        <h3 className="mb-3">Get to know us</h3>
                        <ul>
                            <li className="my-2"><a href="#">Careers</a></li>
                            <li className="my-2"><a href="#">Amazon Newsletter</a></li>
                            <li className="my-2"><a href="#">About Amazon</a></li>
                            <li className="my-2"><a href="#">Sustainability</a></li>
                            <li className="my-2"><a href="#">Press Center</a></li>
                            <li className="my-2"><a href="#">Investor Relations</a></li>
                            <li className="my-2"><a href="#">Amazon Devices</a></li>
                            <li className="my-2"><a href="#">Amazon Science</a></li>
                        </ul>

                    </div>

                    <div className="links-wrapper two me-5 mt-1">
                        <h3 className="mb-3">Make Money With Us</h3>
                        <ul>
                            <li className="my-2"><a href="#">Sell products on Amazon</a></li>
                            <li className="my-2"><a href="#">sell apps on Amazon</a></li>
                            <li className="my-2"><a href="#">Supply to Amazon</a></li>
                            <li className="my-2"><a href="#">Become an Affiliate</a></li>
                            <li className="my-2"><a href="#">Become a delivery driver</a></li>
                            <li className="my-2"><a href="#">Start a package delivery Business</a></li>
                            <li className="my-2"><a href="#">Advertise Your products</a></li>
                            <li className="my-2"><a href="#">Self-Publish with Us</a></li>
                            <li className="my-2"><a href="#">Host an Amazon Hub</a></li>
                            <li className="my-2"><a href="#">see More Ways to Make Money</a></li>
                        </ul>
                    </div>
                    <div className="links-wrapper three me-5 mt-1">
                        <h3 className="mb-3">Amazon Payment Products</h3>
                        <ul className="my-2">
                        <li className="my-2"><a href="#">Amazon Rewards Visa Signature</a></li>
                        <li className="my-2"><a href="#">Amazon Store Card</a></li>
                        <li className="my-2"><a href="#">Amazon Secured Card</a></li>
                        <li className="my-2"><a href="#">Amazon Business Card</a></li>
                        <li className="my-2"><a href="#">Shop with Points</a></li>
                        <li className="my-2"><a href="#">Credit Card Marketplace</a></li>
                        <li className="my-2"><a href="#">Reload Your Balance</a></li>
                        <li className="my-2"><a href="#">Amazon Currency Converter</a></li>
                       </ul>
                    </div>

                    <div className="links-wrapper four me-5 mt-1">
                        <h3 className="mb-3">Let Us Help You</h3>
                        <ul className="my-2">
                        <li className="my-2"><a href="#">Amazon and COVID-19</a></li>
                        <li className="my-2"><a href="#">Your Account</a></li>
                        <li className="my-2"><a href="#">Your Orders</a></li>
                        <li className="my-2"><a href="#">Shipping Rates and Policies</a></li>
                        <li className="my-2"><a href="#">Amazon Prime</a></li>
                        <li className="my-2"><a href="#">Returns & Replacements</a></li>
                        <li className="my-2"><a href="#">Manage Your Content and Devices</a></li>
                        <li className="my-2"><a href="#">Your Recalls and Product Safety Alerts</a></li>
                        <li className="my-2"><a href="#">Amazon Assistant</a></li>
                        <li className="my-2"><a href="#">Help</a></li>
                      
                        </ul>

                    </div>
                </div>
                <div className="header-logo mt-4">
                    <img  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </div>
            <div className="name d-flex pt-5">
            <div className="Built-by">Built by:</div>
            <div className="link-name"><a href="http://yosefhandero.com/">Yosef handero</a></div>
                
            </div>

            </div>
            <hr/>
        </div>
    );
}

export default Footer;
