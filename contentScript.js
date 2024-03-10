// contentScript.js
allText = [];

function captureTextFromChildDivs() {
  parentElements = document.querySelectorAll(
    ".xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs.x126k92a"
  );
  console.log("Parent Elements:", parentElements);

  if (parentElements.length > 0) {
    for (const parent of parentElements) {
      let childDivs = parent.children;
      let cDivData = "";

      for (const childDiv of childDivs) {
        cDivData += childDiv.textContent + " ";
      }

      cDivData = cDivData.trim();
      if (!allText.includes(cDivData)) {
        allText.push(cDivData);
      }
    }
  }

  console.log("All Text:", allText);
}

// Initial capture
captureTextFromChildDivs();

// Listen for scroll events to capture dynamically loaded content
window.addEventListener("scroll", () => {
  // You may want to implement additional logic to check if more content is available
  captureTextFromChildDivs();
});
