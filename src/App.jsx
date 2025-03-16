import React, { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import pages 
import generalPages from "./data/generalPages.json";
import domainOne from "./data/domainOnePages.json";


function App() {
  const [selectedUrl, setSelectedUrl] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  function toggleDropdown(title) {
    setOpenDropdown((prev) => (prev === title ? null : title));
  }

  function handleSelect(url) {
    setSelectedUrl(url);
    setOpenDropdown(null); // Close dropdown after selection
  }

  function handleHomeClick() {
    setSelectedUrl("");
  }

  return (
    <div>
      <Navbar onHomeClick={handleHomeClick} />

      <div className="main-image">
        <img src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg" alt="Amrita Hospital Logo" />
      </div>

      <h2>PWA TITLE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempora mollitia qui perspiciatis nam, voluptatem sequi culpa aperiam error ipsa assumenda odio dolores harum, aut atque laborum unde repudiandae nobis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus repellendus eos! Libero ut, nisi fugit voluptatibus, voluptatem sed saepe molestiae unde repellendus atque obcaecati, animi illo? Accusamus, voluptates a.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloribus debitis at fugit quibusdam perferendis mollitia nulla corporis! In temporibus repudiandae perspiciatis rem illo corporis recusandae dignissimos odit ipsa necessitatibus?
      </p>

      <div className="gallery-grid">
          <img src="/sample_image.png" alt="Sample" />
          <img src="/sample_image.png" alt="Sample" />
      </div>

      {/* Dropdowns */}
      <div className="dropdown-button-container">

        <Dropdown
          title="General Pages"
          items={generalPages}
          isOpen={openDropdown === "General Pages"}
          toggleDropdown={toggleDropdown}
          onSelect={handleSelect}
        />
        <Dropdown
          title="Module One Pages"
          items={domainOne}
          isOpen={openDropdown === "Module One Pages"}
          toggleDropdown={toggleDropdown}
          onSelect={handleSelect}
        />

      </div>
      

      {/* iFrame to display selected page */}
      {selectedUrl && (
        <div className="iframe-container">
          <iframe src={selectedUrl} title="content-frame"></iframe>
        </div>
      )}

      <Footer />
      
    </div>
  );
}

export default App;
