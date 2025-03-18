import React, { useState } from "react";
import "./App.css";
// import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Guest from "./components/Guest";
import Footer from "./components/Footer";

// // Import pages
// import generalPages from "./data/generalPages.json";
// import domainOne from "./data/domainOnePages.json";

function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // Modal for first-time using the app
  const [isModalVisible, setIsModalVisible] = useState(
    !localStorage.getItem("guestUser")
  );
  

  function toggleDropdown(title) {
    setOpenDropdown((prev) => (prev === title ? null : title));
  }

  function handleSelect(url) {
    setSelectedUrl(url);
    setOpenDropdown(null); // Close dropdown after selection
  }

  function handleHomeClick() {
    setSelectedUrl("");
    setIsGuest(false);
    setIsLogin(false); // Reset to home page
    window.scrollTo(0, 0);
  }

  function handleLogin() {
    setIsLogin(true);
    setIsGuest(false);
    console.log("Login Clicked");
    console.log("Modal visibility off");
    setIsModalVisible(false);
  }

  function handleGuest() {
    setIsGuest(true);
    setIsLogin(false);
    console.log("Guest Clicked");
    console.log("Modal visibility off");
    setIsModalVisible(false);
  }

  return (
    <div>
      <Navbar onHomeClick={handleHomeClick} />

      {!isGuest && !isLogin ? (
        // Home Page with Login and Guest Options
        <Home 
          handleLogin={handleLogin} 
          handleGuest={handleGuest} 
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      ) : isLogin ? (
        // Show login page inside an iframe
        <Login />
      ) : (
        // Guest Page with Modules and Dropdowns
        <Guest
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          handleSelect={handleSelect}
          selectedUrl={selectedUrl}
        />

      )}

    </div>
  );
}

export default App;