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
        Home
      </button>
      <div className="menu-container">
        <i onClick={toggleDropdown} className="fa fa-bars"></i>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div 
              className={`dropdown-item ${selectedOption === "Metaflo" ? "selected" : ""}`} 
              onClick={() => handleSelect("Metaflo")}
            >
              Metaflo
            </div>
            <div 
              className={`dropdown-item ${selectedOption === "AIMS Metaflo" ? "selected" : ""}`} 
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
