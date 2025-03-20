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
    false
  );

  // Admin URL for login by default
  const [adminUrl, setAdminUrl] = useState("https://research.amritahospitals.org/");

  // complete URL for the iframe
  // const [completeUrl, setCompleteUrl] = useState("");
  
  const [selectedServerOption, setSelectedServerOption] = useState("Metaflo");

  const [isServerDropdownOpen, setisServerDropdownOpen] = useState(false);


  const servers = {
    "Metaflo": "https://research.amritahospitals.org/",
    "AIMS Metaflo": "https://research-int.amritahospitals.org/",
    "L1-Staging-Metaflo": "http://test-ahis-l1.amrita.edu/"
  }


  const handleServerSelect = (option) => {
    setSelectedServerOption(option);
    setisServerDropdownOpen(false); // Close dropdown after selection
    setAdminUrl(servers[option]);
    console.log("Selected Server:", option);
  };


  function toggleDropdown(title) {
    setOpenDropdown((prev) => (prev === title ? null : title));
  }

  

  function handleSelect(url) {
    setSelectedUrl(url);
    console.log("Selected URL: ", url);
    // console.log("Complete URL: ", completeUrl);
    setOpenDropdown(null); // Close dropdown after selection
  }

  function handleHomeClick() {
    setSelectedUrl("");
    setIsGuest(false);
    setIsLogin(false); // Reset to home page
    window.scrollTo(0, 0);
  }

  function handleLogin() {
    console.log("Selected server: ", adminUrl);
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
      {/* Navbar with option to select server */}
      <Navbar 
      onHomeClick={handleHomeClick} 
      setAdminUrl={setAdminUrl} 
      handleLogin={handleLogin} 
      handleServerSelect={handleServerSelect}
      selectedServerOption={selectedServerOption}
      setSelectedServerOption={setSelectedServerOption}
      isServerDropdownOpen={isServerDropdownOpen}
      setIsServerDropdownOpen={setisServerDropdownOpen}

      />

      {!isLogin ? (
        // Home Page with Login and Guest Options
        <Home 
          handleLogin={handleLogin} 
          handleGuest={handleGuest} 
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          setAdminUrl={setAdminUrl}
          // for guest selection
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          handleSelect={handleSelect}
          selectedUrl={selectedUrl}
          selectedServerOption={selectedServerOption} 
          setSelectedServerOption={setSelectedServerOption}
        />
      ) :(
        // Show login page inside an iframe
        <Login adminUrl={adminUrl} />
      ) 
      }

    </div>
  );
}

export default App;