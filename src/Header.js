import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header_nav">
        
          <Link to="/login">
            <div className="header_option">
              <span className="header_optionLineOne">Hello Guest</span>
              <span className="header_optionLineTwo">Sign in</span>
            </div>
          </Link>

        
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <span className="header_optionLineTwo header_basketCount">
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;