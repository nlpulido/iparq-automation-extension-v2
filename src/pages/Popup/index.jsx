import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import InvalidPopup from "./InvalidPopup";
import './index.css';

// check if we're on an iPARQ URL
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

    // rewrite popup.html if we're not on an admin iPARQ site
    if (!tabs[0].url.includes("admin.thepermitstore")) {
        render(<InvalidPopup />, window.document.querySelector('#app-container'));
    } else {
        render(<Popup />, window.document.querySelector('#app-container'));
    }

});

if (module.hot) module.hot.accept();
