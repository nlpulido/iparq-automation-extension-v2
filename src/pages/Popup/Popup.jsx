import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Popup.css';

const portalOptions = [
  { value: "main", label: "Main Portal" },
  { value: "affiliate", label: "Affiliate Portal" }
];

const Popup = () => {
  let [portal, setPortal] = useState("");
  let [validating, setValidating] = useState(false);

  useEffect(() => {
    chrome.storage.local.get(['automation_running'], (result) => {
      setValidating(result.automation_running);
    });
  }, []);

  function handlePortalChange(portal) {
    setPortal(portal);
  }

  function handleValidationToggle() {
    setValidating(!validating);
  }

  function startValidation() {
    handleValidationToggle();

    // send a message to the content script to change the portal
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: portal.value});
    });
  }

  function interruptValidation() {
    handleValidationToggle();

    // send a message to the content script to stop the validation
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "interrupt"});
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>iPARQ Permit Validator</h1>
        <h5>Automation Running: {validating ? "true" : "false"}</h5>
        <Select 
          options={portalOptions} 
          className="dropdown" 
          defaultValue={portal}
          onChange={(selected) => handlePortalChange(selected)}
        />
        <div className="popup-buttons">
          <button className="button-container" id="validateBtn" onClick={startValidation} disabled={validating || portal === ""}>Validate Permits</button>
          <button className="button-container" id="validateBtn" onClick={interruptValidation} disabled={!validating}>Stop Permits</button>
        </div>
        <a href="https://docs.google.com/spreadsheets/d/1WOto59_8sdDg1_4Zd52UAteDmusdW1F5WdtBbGhpouk/" target="_blank" rel="noopener noreferrer" className="popup-link"><h3>Edit Google Sheet</h3></a>
      </header>
    </div>
  );
};

export default Popup;
