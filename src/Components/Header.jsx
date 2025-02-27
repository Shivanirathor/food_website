import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineState from "../utils/useOnlineState";
const Header = () => {
  const [logout, setLogout] = useState("Login");
  const onlineStatus = useOnlineState();
  const logoutFun = () => {
    logout === "Login" ? setLogout("Logout") : setLogout("Login");
  };
  return (
    <div>
      <header className="flex justify-between shadow-lg">
        <div>
          <img className="w-40" src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-5">
            <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
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
            <button className="login" onClick={logoutFun}>
              {logout}
            </button>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
