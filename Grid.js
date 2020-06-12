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

const colorGrid = function () {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      node = grid[x][y];
      if (node.isBlocked) {
        node.show(color(0));
      } else {
        node.show(color(255));
      }
    }
  }

  closedList.forEach(node => node.show(color(0, 0, 255)));
  openList.forEach(node => node.show(color(255, 0, 100)));


  let path = [];
  let temp = current;
  while (temp.parent !== null) {
    path.push(temp);
    temp = temp.parent;
  }
  path.forEach(x => x.show(color(100, 100, 50)))

  source.show(color(100, 100, 255));
  target.show(color(100, 100, 255));
}