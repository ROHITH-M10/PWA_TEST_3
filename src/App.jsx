import React, { useState } from "react";
import "./App.css";
// import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Guest from "./components/Guest";
import Footer from "./components/Footer";

// Import servers 
import servers from "./data/servers.json";

// // Import pages
// import generalPages from "./data/generalPages.json";
// import domainOne from "./data/domainOnePages.json";

function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(localStorage.getItem("server") ? false : true);
  const [adminUrl, setAdminUrl] = useState("https://research.amritahospitals.org/");
  const [selectedServerOption, setSelectedServerOption] = useState(localStorage.getItem("server") ? localStorage.getItem("server") : "Web Forms");
  const [isServerDropdownOpen, setIsServerDropdownOpen] = useState(false);

  const [loginReload, setLoginReload] = useState(false); // new state to reload login page
  // complete URL for the iframe
  // const [completeUrl, setCompleteUrl] = useState("");
  




  const handleServerSelect = (option) => {
    setSelectedServerOption(option);
    setIsServerDropdownOpen(false); // Close dropdown after selection
    setAdminUrl(servers[option]);
    console.log("Selected Server:", option);
  };


  function toggleDropdown(title) {
    setOpenDropdown((prev) => (prev === title ? null : title));
  }

  const toggleServerDropdown = () => {
    setIsServerDropdownOpen(!isServerDropdownOpen);
  };
  

  function handleSelect(url) {
    setSelectedUrl(url);
    setIsServerDropdownOpen(false); // Close dropdown after selection
    console.log("Selected URL: ", url);
    // console.log("Complete URL: ", completeUrl);
    setOpenDropdown(null); // Close dropdown after selection
  }

  function handleHomeClick() {
    setSelectedUrl("");
    setIsServerDropdownOpen(false); // Close dropdown after selection
    setIsGuest(false);
    setOpenDropdown(false);
    setIsLogin(false); // Reset to home page
    window.scrollTo(0, 0);
  }

  function handleLogin() {
    console.log("Selected server: ", adminUrl);
    setIsServerDropdownOpen(false); // Close dropdown after selection
    setIsLogin(false);
    setLoginReload(prev => prev + 1); // Reload login page
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

    // Save Server Selection
    const saveServerSelection = (server) => () => {
      console.log("Server Selected: ", server);
      localStorage.setItem("server", server); // Save server selection
      setIsModalVisible(false); // Close modal
      setAdminUrl(servers[server]);
      console.log("Admin URL: ", servers[server]);
      setSelectedServerOption(server);
  
    };


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
      setIsServerDropdownOpen={setIsServerDropdownOpen}
      toggleServerDropdown={toggleServerDropdown}
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
          saveServerSelection={saveServerSelection}
        />
      ) :(
        // Show login page inside an iframe
        <Login adminUrl={adminUrl} 
        onHomeClick={handleHomeClick}
        loginReload={loginReload}
        />
      ) 
      }

    </div>
  );
}

export default App;