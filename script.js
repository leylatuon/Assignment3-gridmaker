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
  if (numRows > 0) {
    numRows--;
    let grid = document.getElementById("grid");
    grid.removeChild(grid.lastElementChild);
    if (numRows == 0) {
      numCols = 0;
    }
  }
}

// Remove a column
function removeC() {
  const grid = document.getElementById("grid");
  if (numCols > 0) {
    numCols--;
    rows = document.querySelectorAll("tr");
    for (i = 0; i < numRows; i++) {
      rows[i].deleteCell(numCols);
    }
    if (numCols == 0) {
      while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
      numRows = 0;
    }
  }
}

// Set global variable for selected color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU() {
  for (i = 0; i < numRows * numCols; i++) {
    if (document.querySelectorAll("td")[i].style.backgroundColor === "") {
      document.querySelectorAll("td")[i].style.backgroundColor = colorSelected;
    }
  }
}

// Fill all cells
function fillAll() {
  let num = numRows * numCols;
  for (i = 0; i < num; i++) {
    document.querySelectorAll("td")[i].style.backgroundColor = colorSelected;
  }
}

// Clear all cells
function clearAll() {
  let num = numRows * numCols;
  for (i = 0; i < num; i++) {
    document.querySelectorAll("td")[i].style.backgroundColor = "";
  }
}

//Select cell for color
document.getElementById("grid").addEventListener("click", function (event) {
  colorSelected = document.getElementById("selectedColorId").value;
  event.target.style.backgroundColor = colorSelected;
});
