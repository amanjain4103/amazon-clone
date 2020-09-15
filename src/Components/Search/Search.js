import React from "react";
import Product from "../Product/Product";
import ProductRow from "../ProductRow/ProductRow";
import {useStateValue} from "../../StateProvider";
import "./Search.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const Search = () => {

    const [{searchQuery}, dispatch] = useStateValue();

    return (
        <div className="home">
            {/* <div id="home__top" className="home__container">
                <img 
                    alt=""
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
            </div> */}

            
            {
                searchQuery === "all"
                ?
                (   
                    <div>
                        <ProductRow category="electronics" />
                        <ProductRow category="jewelery" />
                        <ProductRow category="men clothing" />
                        <ProductRow category="women clothing" />
                    </div>
                )
                :
                (
                    searchQuery === "electronics"
                    ?
                    (
                        <div>
                            <ProductRow category="electronics" />
                        </div>
                    )
                    :
                    (
                        searchQuery === "jewelery"
                            ?
                            (
                                <div>
                                    <ProductRow category="jewelery" />
                                </div>
                            )
                            :
                            (
                                searchQuery === "men clothing"
                                ?
                                (
                                    <div>
                                        <ProductRow category="men clothing" />
                                    </div>
                                )
                                :
                                (
                                    searchQuery === "women clothing"
                                    ?
                                    (
                                        <div>
                                            <ProductRow category="women clothing" />
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="orders__error">
                                            <h2 className="orders__errorHeading">Not able to find result! Section under Development</h2>
                                            <div>
                                                <Link to="/"><button className="orders__amzStyleButton">Back To Home</button></Link>
                                            </div>
                                        </div>
                                    )
                                )
                            )
                    )
                )
            }

            
            <Footer hideBackToTop={true} />
        </div>
    )
}

export default Search;