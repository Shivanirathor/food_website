import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
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
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CART</li>
            <button onClick={logoutFun}>{logout}</button>
          </ul>
        </div>
      </header>
     
    </div>
  );
};

export default Header;
