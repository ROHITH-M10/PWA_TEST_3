import React from "react";

function Navbar({ onHomeClick }) {
  return (
    <div className="go-to-home-nav-bar">
      {/* <button onClick={onHomeClick}>Home</button> */}
      
      {/* <img 
    //   onClick={onHomeClick}
      src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg" 
      alt="Logo" /> */}

    <i 
      onClick = {onHomeClick} 
      className="fa fa-bars"
      ></i>

    </div>
  );
}

export default Navbar;
