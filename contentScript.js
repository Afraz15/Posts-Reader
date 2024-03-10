parentElement = document.querySelectorAll(
  ".xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x1vvkbs.x126k92a"
); // Replace with your parent element's class

console.log("Parent Element:", parentElement);

allText = [];

if (parentElement.length > 0) {
  for (let parent of parentElement) {
    let childDivs = parent.children; // Get all child elements
    let cDivData = ""; // Initialize variable to store text content of all child divs
    for (let childDiv of childDivs) {
      // Concatenate the text content of each child div
      cDivData += childDiv.textContent + " ";
    }
    // Store the concatenated text content in the allText array
    allText.push(cDivData.trim()); // trim() is used to remove the trailing space
  }
}

console.log("All Text:", allText);

/* const parentElement = document.getElementById("parent-id"); // Replace with parent's ID
if (parentElement) {
  const childDivs = parentElement.children; // Get all child elements
  const desiredIndex = 0; // Replace with the desired index (0 for the first child)
  if (childDivs[desiredIndex]) {
    const specificDiv = childDivs[desiredIndex];
    // Access text content or manipulate the div
    console.log("Specific div at index", desiredIndex, "found:", specificDiv);
    specificDiv.textContent += "(Modified)";
  } else {
    console.log("Div at index", desiredIndex, "not found within parent.");
  }
} else {
  console.log("Parent element with ID 'parent-id' not found.");
}
 */
