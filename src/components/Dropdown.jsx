import React from "react";

function Dropdown({ title, items, isOpen, toggleDropdown, onSelect }) {
  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => toggleDropdown(title)}>
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {Object.entries(items).map(([name, url]) => (
            <button
              key={name}
              className="dropdown-item"
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
