import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  const [logout, setLogout] = useState("Login");
  const logoutFun = () => {
    logout === "Login" ? setLogout("Logout") : setLogout("Login");
  };
  return (
    <div>
      <header className="header">
        <div>
          <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/" className="links">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                ABOUT US
              </Link>
            </li>

            <li>
              <Link to="/contact" className="links">
                CONTACT US
              </Link>
            </li>
            <li>
              <Link to="/cart" className="links">
                CART
              </Link>
            </li>
            <button className="login" onClick={logoutFun}>{logout}</button>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
