import React from "react";
import logo from "./Images/logo2.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="50" />
        <h1>Praveen Keep</h1>
      </div>
    </>
  );
};
export default Header;
