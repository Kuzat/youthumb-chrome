/* global chrome */
chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"button.js"});
});