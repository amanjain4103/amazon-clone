import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import {Link, useHistory} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "../../StateProvider";
import "./Header.css";
import { auth } from "../../firebase.js";

const Header = () => {

    const [{basket,user,searchQuery}, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    let fakeEvent = {target: {value: "something"}};

    const handleCategorySearch  = (event) => {
        console.log(event.target.value)
        dispatch({
            type: "ADD_SEARCH_QUERY",
            item: event.target.value
        })
        history.push("/search")


    }
    const handleTextSearch  = (event) => {

        event.preventDefault();
        handleTextSearch(fakeEvent);


    }

    return(
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">   
                
                <select onChange={(event) => handleCategorySearch(event)} className="header__selectDial">
                    <option>All</option>
                    <option value="electronics" >Electronics</option> 
                    <option value="jewelery" >Jewelery</option>
                    <option value="men clothing" >Men Clothing</option>
                    <option value="women clothing" >Women Clothing</option>
                </select>
                
                <form 
                  onSubmit={ (event) => handleTextSearch(event)}
                  style={{"width":"100%"}}
                >
                <input 
                    className="header__searchInput"
                    type="text"
                />
                </form>
                
                <SearchIcon onClick={() => handleCategorySearch(fakeEvent)} className="header__searchIcon" />

            </div>

            <div className="header__nav">
                    {
                        user?
                        <Link to="/">
                             <div onClick={handleAuthentication} className="header__option">
                            <span className="header__optionLineOne">
                                {
                                    (user?.email) || "Hello Guest" 
                                }
                            </span>
                            <span className="header__optionLineTwo">
                                {user? "Sign Out" : "Sign In"}
                            </span>
                            </div>
                        </Link>
                        :
                        <Link to="/login">
                             <div onClick={handleAuthentication} className="header__option">
                                <span className="header__optionLineOne">
                                {   
                                    (user?.email) || "Hello Guest" 
                                    }
                                </span>
                                <span className="header__optionLineTwo">
                                    {user? "Sign Out" : "Sign In"}
                                </span>
                            </div>
                        </Link>
                    }
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns And
                        </span>
                        <span className="header__optionLineTwo">
                            Orders
                        </span>
                    </div> 
                </Link>
                <a  target="_blank" href ="https://www.primevideo.com/">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Your
                        </span>
                        <span className="header__optionLineTwo">
                            Prime
                        </span>
                    </div>
                </a>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;