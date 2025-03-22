import React, { useState } from "react";

function Navbar({ onHomeClick, setAdminUrl, handleLogin, selectedServerOption, setSelectedServerOption, handleServerSelect, setIsServerDropdownOpen, isServerDropdownOpen, toggleServerDropdown }) {


  return (
    <div className="go-to-home-nav-bar">
      <button onClick={onHomeClick} className="home-button">
      <i className="fa fa-home"></i>
      </button>
      <div className="menu-container">
        <i onClick={toggleServerDropdown} className="fa fa-server"></i>
        <i onClick={handleLogin} className="fa fa-user-circle"></i>

        {isServerDropdownOpen && (
          <div className="menu-dropdown">
            <div 
              className={`menu-dropdown-item ${selectedServerOption === "Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("Metaflo")}
            >
              Metaflo
            </div>
            <div 
              className={`menu-dropdown-item ${selectedServerOption === "AIMS Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("AIMS Metaflo")}
            >
              AIMS Metaflo
            </div>

            <div 
              className={`menu-dropdown-item ${selectedServerOption === "L1-Staging-Metaflo" ? "server-selected" : ""}`}
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
