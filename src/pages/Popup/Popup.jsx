import React, { useState } from 'react';
import Select from 'react-select';
import './Popup.css';


const portalOptions = [
  { value: "main", label: "Main Portal" },
  { value: "affiliate", label: "Affiliate Portal" }
]

function initializeDropdown() {

  // query our current tab & set our dropdown accordingly
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].title.includes("AFFILIATES")) {
      document.getElementById("permit-portal").value = "affiliate";
    }
  });

}

const Popup = () => {
  let [portal, setPortal] = useState("main");

  return (
    <div className="App">
      <header className="App-header">
        <h1>iPARQ Permit Validator</h1>
        <Select options={portalOptions} className="dropdown"/>
        <div className="popup-buttons">
          <button className="button-container" id="validateBtn">Validate Permits</button>
        </div>
        <a href="https://docs.google.com/spreadsheets/d/1WOto59_8sdDg1_4Zd52UAteDmusdW1F5WdtBbGhpouk/" target="_blank" rel="noopener noreferrer" className="popup-link"><h3>Edit Google Sheet</h3></a>
      </header>
    </div>
  );
};

export default Popup;
