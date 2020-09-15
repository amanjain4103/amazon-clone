import React from "react";
import "./Footer.css";

const Footer = (props) => {
     return (
        <div className="footer">
            {
                props?.hideBackToTop
                ?
                ("")
                :
                (
                    <a href="#home__top" className="footer__backToToppnk">
                        <div className="footer__backToTop">
                            <p>BACK TO TOP</p>
                        </div>
                    </a>
                )
            }
            
            <div className="footer__main">
                
                <div className="footer__mainInner">
                    <h3>Get to Know Us!!</h3>
                    <p><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About Us</a></p>
                    <p><a href="https://amazon.jobs/">Careers</a></p>
                    <p><a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Press Releases</a></p>
                    <p><a href="https://www.amazon.in/b?ie=UTF8&node=8872558031&ref_=footer_cares">Amazon Cares</a></p>
                    <p><a href="https://www.amazon.in/Online-Charity/b?ie=UTF8&node=4594605031&ref_=footer_smile">Get a Smile</a></p>
                </div>

                <div className="footer__mainInner">
                    <h3>Connect with Us!!</h3>
                    <p><a href="http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6">Facebook</a></p>
                    <p><a href="http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6">Twitter</a></p>
                    <p><a href="http://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards">Instagram</a></p>
                   
                </div>

                <div className="footer__mainInner">
                    <h3>Make Money with Us!!</h3>
                    <p><a href="https://www.amazon.in/b/?_encoding=UTF8&ld=AZINSOANavDesktopFooter&node=2838698031&ref_=nav_footer_sell">Sell on Amazon</a></p>
                    <p><a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT">Sell under Amazon Accelerator</a></p>
                    <p><a href="https://www.amazon.in/gp/redirect.html?_encoding=UTF8&location=https%3A%2F%2Faffiliate-program.amazon.in%2F%3Fref_%3Dfooter_assoc%26utm_campaign%3Dassocshowcase%26utm_medium%3Dfooter%26utm_source%3DGW&source=standards&token=4D7ADB5A094B04230C576B761FB8EC3D657E2376">Become an Affiliate</a></p>
                    <p><a href="http://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter">Fulfilment by Amazon</a></p>
                    <p><a href="https://advertising.amazon.in/?ref=Amz.in">Advertise Your Products</a></p>
                    <p><a href="https://www.amazonpay.in/merchant">Amazon Pay on Merchants</a></p>

                </div>

                <div className="footer__mainInner">
                    <h3>Let Us Help You!!</h3>
                    <p><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">COVID-19 and Amazon</a></p>
                    <p><a href="https://www.amazon.in/gp/css/homepage.html?ie=UTF8&ref_=footer_ya">Your Account</a></p>
                    <p><a href="https://www.amazon.in/gp/css/returns/homepage.html?ie=UTF8&ref_=footer_hy_f_4">Returns Centre</a></p>
                    <p><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=201083470&ref_=footer_swc">100% Purchase Protection</a></p>
                    <p><a href="https://www.amazon.in/b?ie=UTF8&node=6967393031&ref_=footer_mobapp">Amazon App Download</a></p>
                    <p><a href="https://www.amazon.in/gp/BIT/theamazonapp/ref=footer_assistant_download_copy">Amazon Assistant Download</a></p>
                    <p><a href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=200507590&ref_=footer_gw_m_b_he">Help</a></p>
   
                </div>

            </div>
            <div className="footer__copyright">
                ©2020-present, Aman Jain, Its a Amazon clone  
            </div>
        </div>
     )
 }

export default Footer;