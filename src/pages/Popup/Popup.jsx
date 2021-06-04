import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>iPARQ Permit Validator</h1>
        <select>
          <option value="main">Main Portal</option>
          <option value="affiliate">Affiliate Portal</option>
        </select>
        <div className="popup-buttons">
          <button className="button-container" id="validateBtn">Validate Permits</button>
          <button className="button-container" id="cancelBtn" disabled>Cancel</button>
        </div>
        <a href="https://docs.google.com/spreadsheets/d/1WOto59_8sdDg1_4Zd52UAteDmusdW1F5WdtBbGhpouk/" target="_blank" rel="noopener noreferrer" className="popup-link"><h3>Edit Google Sheet</h3></a>
      </header>
    </div>
  );
};

export default Popup;
