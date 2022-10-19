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
  if(numRows > 0){
    numRows--;
    let grid = document.getElementById("grid");
    grid.removeChild(grid.lastElementChild);
    if(numRows == 0){
      numCols = 0;
    }
  }
}


// Remove a column
function removeC() {
  let grid = document.getElementById("grid");
  if(numCols > 0){
    numCols--;
    rows = document.querySelectorAll("tr");
    for (i = 0; i < numRows; i++) {
      rows[i].deleteCell(numCols);
    }
    if(numCols == 0){
      numRows = 0;
    }
  }
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
  document.querySelectorAll("td").style.backgroundColor = colorSelected;
}

// Clear all cells
function clearAll() {
  alert("Clicked Clear All"); // Replace this line with your code.
}
