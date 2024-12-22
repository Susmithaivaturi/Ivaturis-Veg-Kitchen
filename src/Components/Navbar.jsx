import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <div className="mx-auto text-center">
          <a className="navbar-brand text-white d-block mb-0">Ivaturi's Veg Kitchen</a>
          <span className="text-white d-block">
            <i className="fa-brands fa-pagelines" style={{ color: "#ffffff", margin: "0 10px", transform: "scaleX(-1)" }}></i>
            <i>rice to meet you</i>
            <i className="fa-brands fa-pagelines" style={{ color: "#ffffff", margin: "0 10px" }}></i>
          </span>
        </div>

        {/* Logo on the right side */}
        <div className="logo-container">
          <img
            src="/Ivaturis-Veg-Kitchen/images/logo.png"
            alt="Logo"
            className="logo-img"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
