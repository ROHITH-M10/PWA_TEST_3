import React from "react";
import Dropdown from "./Dropdown";
// Import pages
import AdministrativeForms from "../data/AdministrativeForms.json";
import ResearchForms from "../data/ResearchForms.json";

function Guest({ openDropdown, toggleDropdown, handleSelect, selectedUrl }) {
  return (
    <div className="guest-page">
      {/* Dropdowns */}
      <div className="guest-dropdown-button-container">
        <Dropdown
          title="Administrative Forms"
          items={AdministrativeForms}
          isOpen={openDropdown === "Administrative Forms"}
          toggleDropdown={toggleDropdown}
          onSelect={handleSelect}
        />
        <Dropdown
          title="Research Forms"
          items={ResearchForms}
          isOpen={openDropdown === "Research Forms"}
          toggleDropdown={toggleDropdown}
          onSelect={handleSelect}
        />

      </div>

      {/* iFrame to display selected page */}
      {selectedUrl && (
        <div className="guest-iframe-container">
          <iframe src={selectedUrl} title="content-frame"></iframe>
        </div>
      )}
    </div>
  );
}

export default Guest;
