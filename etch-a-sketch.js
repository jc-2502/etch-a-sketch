let gridSize = 16;
// grid will be square

const setGridSizeButton = document.querySelector('#set-grid-size');
const clearButton = document.querySelector('#clear');
const gridContainer = document.querySelector('#grid-container');

function clearGrid () {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.remove())
}

function createGrid () {
  clearGrid();

  const numSquares = gridSize ** 2;
  const squareSize = ((500 - (gridSize * 2)) / gridSize) + 'px';
  // 500 width of grid container, gridSize * 2 for borders of squares

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = squareSize;
    square.style.height = squareSize;

    if ((i + 1) % gridSize === 0) {
      square.classList.add('grid-square-right');
    }
    if (numSquares - i <= gridSize) {
      square.classList.add('grid-square-bottom');
    }

    gridContainer.appendChild(square);
  }

  addEventListenersToSquares();
}

function addEventListenersToSquares() {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.addEventListener("mouseenter", changeSquare))
}

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + [r, g, b].join() + ")";
}

function calculateNewOpacity(currentOpacity) {
  if (currentOpacity > 0) {
    return currentOpacity - 0.1;
  } else {
    return 0;
  }
}

function changeColour(event) {
  event.target.style["background-color"] = generateRandomRGB();
}

function changeOpacity(event) {
  const currentOpacity = window.getComputedStyle(event.target).getPropertyValue("opacity");
  // event.target.style.opacity initial value is "" since it doesn't exist in inline style yet
  event.target.style.opacity = calculateNewOpacity(currentOpacity);
}

function changeSquare(event) {
  changeColour(event);
  changeOpacity(event);
}

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

  createGrid();
}

setGridSizeButton.addEventListener("click", askGridSize);
clearButton.addEventListener("click", createGrid);
createGrid();
