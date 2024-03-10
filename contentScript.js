allText = [];

function captureTextFromChildDivs() {
  parentElements = document.querySelectorAll(
    ".xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs.x126k92a, .x1swvt13.x1pi30zi.xexx8yu.x18d9i69, .x1yx25j4.x13crsa5.x6x52a7.x1rxj1xn.xxpdul3, div[data-ad-comet-preview='message']"
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

captureTextFromChildDivs();

window.addEventListener("scroll", () => {
  captureTextFromChildDivs();
});
