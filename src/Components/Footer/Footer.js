import React from "react";
import "./Footer.css";

const Footer = () => {
     return (
        <div className="footer">
            <a href="#home__top" className="footer__backToToppnk">
                <div className="footer__backToTop">
                    <h2>🔼 BACK TO TOP 🔼</h2>
                </div>
            </a>
            <div className="footer__main">
                
                <div className="footer__mainInner">
                    <h3>Get to Know Us!!</h3>
                    <p><a href="">About Us</a></p>
                    <p><a>Careers</a></p>
                    <p><a>Press Releases</a></p>
                    <p><a>Amazon Cares</a></p>
                    <p><a>Get a Smile</a></p>
                </div>

                <div className="footer__mainInner">
                    <h3>Connect with Us!!</h3>
                    <p><a>Facebook</a></p>
                    <p><a>Twitter</a></p>
                    <p><a>Instagram</a></p>
                   
                </div>

                <div className="footer__mainInner">
                    <h3>Make Money with Us!!</h3>
                    <p><a>Sell on Amazon</a></p>
                    <p><a>Sell under Amazon Accelerator</a></p>
                    <p><a>Become an Affiliate</a></p>
                    <p><a>Fulfilment by Amazon</a></p>
                    <p><a>Advertise Your Products</a></p>
                    <p><a>Amazon Pay on Merchants</a></p>

                </div>

                <div className="footer__mainInner">
                    <h3>Let Us Help You!!</h3>
                    <p><a>COVID-19 and Amazon</a></p>
                    <p><a>Your Account</a></p>
                    <p><a>Returns Centre</a></p>
                    <p><a>100% Purchase Protection</a></p>
                    <p><a>Amazon App Download</a></p>
                    <p><a>Amazon Assistant Download</a></p>
                    <p><a>Help</a></p>
   
                </div>

            </div>
            <div className="footer__copyright">
                ©2020-present, Aman Jain, Its a Amazon clone  
            </div>
        </div>
     )
 }

export default Footer;