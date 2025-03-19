import React, { useState } from "react";

function Navbar({ onHomeClick, setAdminUrl, handleLogin, selectedOption, setSelectedOption, handleServerSelect, setIsDropdownOpen, isDropdownOpen }) {




  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="go-to-home-nav-bar">
      <button onClick={onHomeClick} className="home-button">
      <i className="fa fa-home"></i>
      </button>
      <div className="menu-container">
        <i onClick={toggleDropdown} className="fa fa-server"></i>
        <i onClick={handleLogin} className="fa fa-sign-in"></i>

        {isDropdownOpen && (
          <div className="menu-dropdown">
            <div 
              className={`menu-dropdown-item ${selectedOption === "Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("Metaflo")}
            >
              Metaflo
            </div>
            <div 
              className={`menu-dropdown-item ${selectedOption === "AIMS Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("AIMS Metaflo")}
            >
              AIMS Metaflo
            </div>

            <div 
              className={`menu-dropdown-item ${selectedOption === "L1-Staging-Metaflo" ? "server-selected" : ""}`}
              onClick={() => handleServerSelect("L1-Staging-Metaflo")}
            >
              L1-Staging-Metaflo
            </div>


          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
