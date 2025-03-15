import React, { useState } from "react";
import "./App.css";

const pages = {
  generalPages: {
    "Amrita Hospitals Research Data Request": "https://research.amritahospitals.org/his-data-request",
    "Sample1": "https://example.com/page1",
    "Sample2": "https://example.com/page2"
  },
  domainOne: {
    "NAFLD/MASLD": "https://research.amritahospitals.org/nafld/masld/new",
    "Sample1": "https://example.com/page8"
  }
};

const Dropdown = ({ title, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
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
                setIsOpen(false);
              }}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [selectedUrl, setSelectedUrl] = useState("");

  return (
    <div>
      <div className="go-to-home-nav-bar">
            <button onClick={() => setSelectedUrl("")}>Home</button>
            <i className="fa fa-bars"></i>
      </div>

      <h2>PWA TITLE</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia quod
        dolorum deleniti sit dignissimos.
      </p>

      {/* Image Gallery */}
      <div className="gallery-grid">
        <img src="/sample_image.png" alt="Sample" />
        <img src="/sample_image.png" alt="Sample" />
      </div>

      {/* Dropdowns */}
      <Dropdown title="General Pages" items={pages.generalPages} onSelect={setSelectedUrl} />
      <Dropdown title="Module One Pages" items={pages.domainOne} onSelect={setSelectedUrl} />

      {/* iFrame to display selected page */}
      {selectedUrl && (
        <div className="iframe-container">
          <iframe src={selectedUrl} title="content-frame"></iframe>
        </div>
      )}
    </div>
  );
};

export default App;
