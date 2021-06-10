console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
        console.log(request.url);
    }
);