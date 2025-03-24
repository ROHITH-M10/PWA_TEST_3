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
              className={`menu-dropdown-item ${selectedServerOption === "Web Forms" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("Web Forms")}
            >
              Web Forms
            </div>
            <div 
              className={`menu-dropdown-item ${selectedServerOption === "Registries" ? "server-selected" : ""}`} 
              onClick={() => handleServerSelect("Registries")}
            >
              Registries
            </div>

            <div 
              className={`menu-dropdown-item ${selectedServerOption === "Staging / Test" ? "server-selected" : ""}`}
              onClick={() => handleServerSelect("Staging / Test")}
            >
              Staging / Test
            </div>


          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
