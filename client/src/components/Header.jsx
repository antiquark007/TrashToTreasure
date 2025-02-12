import React, { useContext } from "react";
import "./Header.css";
import { LoginContext } from "./ContextProvider/Context";

const Header = () => {
  const { logindata } = useContext(LoginContext);

  return (
    <header>
      <nav className="navbar">
        <h1 className="navbar-logo">MyApp</h1>
        <div className="navbar-user">
          {logindata ? (
            <>
              <span className="navbar-username">{logindata.fname}</span>
              <div className="navbar-avatar">pic</div>
            </>
          ) : (
            <span className="navbar-login">Login</span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;