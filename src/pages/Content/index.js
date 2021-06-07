import { printLine } from './modules/print';

// Promise to switch to the main portal
function switchToMainPortal() {
  return new Promise((resolve) => {
    console.log("Switching to main portal");
    // Navigate to the main portal
    window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=83";
    resolve();
  });
}

// Promise to switch to the affiliate portal
function switchToAffiliatePortal() {
  return new Promise((resolve) => {
    console.log("Switching to affiliate portal");
    // Navigate to the main portal
    window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=155";
    resolve();
  });
}

// promise to navigate to the permit types
function navigatePermitTypes() {
  return new Promise((resolve) => {
      console.log("Switching to navigating to permit types");

      // Navigate to the permit types page
      window.location.href = "https://admin.thepermitstore.com/setup/permittypes.php";

      resolve();
  })
}

function startValidator() {
  console.log("Starting validator...");
  navigatePermitTypes();
}

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');
printLine("Using the 'printLine' function from the Print Module");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.type == "main") {
      switchToMainPortal();
    } else if (request.type == "affiliate") {
      switchToAffiliatePortal();
    } else if (request.type == "interrupt") {
      console.log("Interrupting validator...");
    } else if (request.type == "start") {
      startValidator();
    } else {
      console.log(`Got an unknown type: ${request.type}`)
    }
  }
);