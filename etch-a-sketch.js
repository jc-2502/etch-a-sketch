const gridSize = 16;
// grid will be square

const gridContainer = document.querySelector('#grid-container');

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
addEventListenersToSquares()
