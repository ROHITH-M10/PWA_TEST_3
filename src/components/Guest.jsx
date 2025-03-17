import React from "react";
import Dropdown from "./Dropdown";
import generalPages from "../data/generalPages.json";
import domainOne from "../data/domainOnePages.json";

function Guest({ openDropdown, toggleDropdown, handleSelect, selectedUrl }) {
  return (
    <div className="guest-page">
      {/* Dropdowns */}
      <div className="guest-dropdown-button-container">
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
    </div>
  );
}

export default Guest;
