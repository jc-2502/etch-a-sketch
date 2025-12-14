let gridSize = 16;
// grid will be square

const setGridSizeButton = document.querySelector('#set-grid-size');
const clearButton = document.querySelector('#clear');
const gridContainer = document.querySelector('#grid-container');

function clearGrid () {
  const gridRows = document.querySelectorAll('.grid-row');

  gridRows.forEach((gridRow) => gridRow.remove())
}

function createGrid () {
  clearGrid();

  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      gridRow.appendChild(square);
    }

    gridRow.classList.add('grid-row');
    gridContainer.appendChild(gridRow);
  }

  addEventListenersToSquares();
}

function addEventListenersToSquares() {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach((square) => square.addEventListener("mouseenter", changeColour))
}

function changeColour(event) {
  event.target.style["background-color"] = generateRGBA(event);
}

function generateRGBA(event) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const a = calculateNewOpacity(event);

  // join() works with number values
  return `rgba(${ [r, g, b, a].join() })`;
}

function calculateNewOpacity(event) {
  const currentRGBA = event.target.style["background-color"];

  // initial value of event.target.style.property is "" since they don't exist in inline style yet
  if (currentRGBA === "" ) {
    // blank square
    return 0.1;
  } else {
    const rgbaValues = currentRGBA.match(/[\d\.]+/g);

    if (rgbaValues.length === 4) {
      // if present, alpha should be 0.1 - 0.9;
      return Number(rgbaValues[3]) + 0.1;
    } else if (rgbaValues.length === 3) {
      // rgba with alpha value 1 returns rgba without the alpha
      return 1;
    }
  }
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
