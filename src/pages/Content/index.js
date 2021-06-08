// import { printLine } from './modules/print';
// console.log('Content script works!');
// console.log('Must reload extension for modifications to take effect.');
// printLine("Using the 'printLine' function from the Print Module");

const HOME = "https://admin.thepermitstore.com/home";
const PERMIT_TYPES = "https://admin.thepermitstore.com/setup/permittypes.php";

// Promise to switch to the main portal
function switchToMainPortal() {
  console.log("Switching to main portal");

  // Navigate to the main portal
  window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=83";
}

// Promise to switch to the affiliate portal
function switchToAffiliatePortal() {
  console.log("Switching to affiliate portal");

  // Navigate to the main portal
  window.location.href = "https://admin.thepermitstore.com/setup/switch_client.php?table=switch&edit=155";
}

// promise to navigate to the permit types
function navigatePermitTypes() {
    console.log("Switching to navigating to permit types");

    // Navigate to the permit types page
    window.location.href = "https://admin.thepermitstore.com/setup/permittypes.php";
}

function startValidator() {
  console.log("Starting validator...");
  // navigatePermitTypes();
}

if (window.location.href === HOME) {
  navigatePermitTypes();
} else if (window.location.href === PERMIT_TYPES) {
  // find the permit tables
  var permit_table_rows = document.getElementById('st_setuppermittypes').rows;


  // loop through each row starting past the Do Not Ticket
  for (var i = 3; i < permit_table_rows.length; i++) {
    // grab the current row 
    var curr_row = permit_table_rows.item(i);

    // otherwise, log the inner text
    var cells = curr_row.cells;
    var permit_title = cells.item(0).innerText;

    // if we encounter the row with the remove items, we break
    if (permit_title === "Show Removed Items") {
      break;
    } else if (permit_title === "Do Not Ticket") {
      continue;
    }

    console.log(permit_title);
  }

}

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