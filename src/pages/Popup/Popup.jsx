import React, { useState } from 'react';
import Select from 'react-select';
import './Popup.css';

const portalOptions = [
  { value: "main", label: "Main Portal" },
  { value: "affiliate", label: "Affiliate Portal" }
];

const Popup = () => {
  let [portal, setPortal] = useState("");

  function handlePortalChange(portal) {
    setPortal(portal);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>iPARQ Permit Validator</h1>
        <Select 
          options={portalOptions} 
          className="dropdown" 
          defaultValue={portal}
          onChange={(selected) => handlePortalChange(selected)}
        />
        <div className="popup-buttons">
          <button className="button-container" id="validateBtn">Validate Permits</button>
        </div>
        <a href="https://docs.google.com/spreadsheets/d/1WOto59_8sdDg1_4Zd52UAteDmusdW1F5WdtBbGhpouk/" target="_blank" rel="noopener noreferrer" className="popup-link"><h3>Edit Google Sheet</h3></a>
      </header>
    </div>
  );
};

export default Popup;
