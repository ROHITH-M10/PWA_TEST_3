import React from "react";

function Navbar({ onHomeClick }) {
  return (
    <div className="go-to-home-nav-bar">
      <button onClick={onHomeClick} className="home-button">
        Home
      </button>
      <i onClick={onHomeClick} className="fa fa-bars"></i>
    </div>
  );
}

export default Navbar;
