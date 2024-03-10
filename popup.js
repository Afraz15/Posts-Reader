// popup.js
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("injectButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["contentScript.js"],
      });
    });
  });
});
