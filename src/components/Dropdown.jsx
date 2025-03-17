import React from "react";

function Dropdown({ title, items, isOpen, toggleDropdown, onSelect }) {
  return (
    <div className="guest-dropdown">
      <button className="guest-dropbtn" onClick={() => toggleDropdown(title)}>
        {title}
      </button>
      {isOpen && (
        <div className="guest-dropdown-content">
          {Object.entries(items).map(([name, url]) => (
            <button
              key={name}
              className="guest-dropdown-item"
              onClick={() => {
                onSelect(url);
                toggleDropdown(null); // Close dropdown after selection
              }}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
