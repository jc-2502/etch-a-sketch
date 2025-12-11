let gridSize = 16;
// grid will be square

const setGridSizeButton = document.querySelector('#set-grid-size');
const gridContainer = document.querySelector('#grid-container');

setGridSizeButton.addEventListener("click", askGridSize);

function askGridSize () {
  const response = prompt('enter grid size: ');
  const responseConvertedToNum = Number(response);

  if (Number.isInteger(responseConvertedToNum)
      && responseConvertedToNum > 0
      && responseConvertedToNum <= 100) {
    gridSize = responseConvertedToNum;
  } else {
    gridSize = 16;
  }
}

function createGrid () {
  const numSquares = gridSize ** 2;

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    gridContainer.appendChild(square);
  }
}

function changeColour(event) {
  event.target.style["background-color"] = "black";
}

function addEventListenersToSquares() {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.addEventListener("mouseenter", changeColour))
}

createGrid();
addEventListenersToSquares();
