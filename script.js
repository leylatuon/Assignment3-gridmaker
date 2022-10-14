// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
  const grid = document.getElementById("grid");
  const newRow = document.createElement("tr");
  grid.appendChild(newRow);
  numRows++;
  if (numCols === 0) {
    newRow.appendChild(document.createElement("td"));
    numCols++;
  } else {
    // add a new td for the number of td in the first row
    for (i = 0; i < numCols; i++) {
      newRow.insertCell();
    }
  }
}

// Add a column
function addC() {
  const grid = document.getElementById("grid");
  if (numRows === 0) {
    const newRow = document.createElement("tr");
    grid.appendChild(newRow);
    newRow.appendChild(document.createElement("td"));
    numRows++;
    numCols++;
  } else {
    rows = document.querySelectorAll("tr");
    for (i = 0; i < numRows; i++) {
      rows[i].insertCell();
    }
  }
  numCols++;
}

// Remove a row
function removeR() {
  alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
  alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
  console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
  alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
  alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
  alert("Clicked Clear All"); // Replace this line with your code.
}
