const gridContainer = document.querySelector('#grid-container');

const gridSize = 16;
// grid will be square

def createGrid () {
  const numSquares = gridSize ** 2;

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    gridContainer.appendChild(square);
  }
}

createGrid();
