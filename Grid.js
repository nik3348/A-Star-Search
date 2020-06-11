const initGrid = function () {
  // Initializing Grid
  let grid = new Array(COLS);
  for (let x = 0; x < grid.length; x++) {
    grid[x] = new Array(ROWS);
  }

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      grid[x][y] = new Cell(x, y, CELLSIZE);
    }
  }

  return grid;
}