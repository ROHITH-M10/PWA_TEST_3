import React, { useState } from "react";

function Navbar({ onHomeClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("AIMS Metaflo");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="go-to-home-nav-bar">
      <button onClick={onHomeClick} className="home-button">
      <i className="fa fa-home"></i>
      </button>
      <div className="menu-container">
        <i onClick={  toggleDropdown} className="fa fa-server"></i>
        <i className="fa fa-sign-in"></i>

        {isDropdownOpen && (
          <div className="menu-dropdown">
            <div 
              className={`menu-dropdown-item ${selectedOption === "Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleSelect("Metaflo")}
            >
              Metaflo
            </div>
            <div 
              className={`menu-dropdown-item ${selectedOption === "AIMS Metaflo" ? "server-selected" : ""}`} 
              onClick={() => handleSelect("AIMS Metaflo")}
            >
              AIMS Metaflo
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
