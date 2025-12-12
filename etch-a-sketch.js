let gridSize = 16;
// grid will be square

const setGridSizeButton = document.querySelector('#set-grid-size');
const gridContainer = document.querySelector('#grid-container');

function askGridSize () {
  const response = prompt('enter grid size: ');
  setGridSize(response);
}

function setGridSize(response) {
  const responseConvertedToNum = Number(response);

  if (Number.isInteger(responseConvertedToNum)
      && responseConvertedToNum > 0
      && responseConvertedToNum <= 100) {
    gridSize = responseConvertedToNum;
  } else {
    gridSize = 16;
  }

  clearGrid();
  createGrid();
}

function clearGrid () {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.remove())
}

function createGrid () {
  const numSquares = gridSize ** 2;
  const squareSize = ((500 - 2 - (gridSize - 1) - (gridSize * 2)) / gridSize) + 'px';
  // 500 width of grid container,
  // 2 for grid container padding,
  // grid-Size - 1 for gaps between squares,
  // gridSize * 2 for borders of squares

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = squareSize;
    square.style.height = squareSize;
    gridContainer.appendChild(square);
  }

  addEventListenersToSquares();
}

function changeColour(event) {
  event.target.style["background-color"] = "black";
}

function addEventListenersToSquares() {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.addEventListener("mouseenter", changeColour))
}

setGridSizeButton.addEventListener("click", askGridSize);
createGrid();
