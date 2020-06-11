const Cell = function (i, j) {
  this.x = i;
  this.y = j;
  this.centerX = this.x * CELLSIZE + CELLSIZE / 2
  this.centerY = this.y * CELLSIZE + CELLSIZE / 2
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.parent = null;
  this.isBlocked = false;
  this.successors = [];

  this.show = function (cellColor) {
    fill(cellColor);
    rect(this.x * CELLSIZE, this.y * CELLSIZE, CELLSIZE, CELLSIZE);
    fill(color(0))
    textSize(15)

    if (SHOW_NUMBERS) {
      text(this.f, this.centerX - 5, this.centerY + 5);
      text(this.h, this.centerX - CELLSIZE / 2, this.centerY + CELLSIZE / 2 - 2);
      text(this.g, this.centerX - CELLSIZE / 2, this.centerY - CELLSIZE / 2 + 15);
    }
  }

  this.addSuccessors = function (grid) {
    for (let j = this.y - 1; j < this.y + 2; j++) {
      for (let i = this.x - 1; i < this.x + 2; i++) {
        if (
          i >= 0 &&
          j >= 0 &&
          i < COLS &&
          j < ROWS
        ) {
          if (!(i === this.x && j === this.y) && !grid[i][j].isBlocked) {
            grid[i][j].parent = this;
            this.successors.push(grid[i][j]);
          }
        }
      }
    }
  }


  this.getDistance = function (child) {
    // Approximate Heuristic 
    const x = Math.abs(child.x - this.x);
    const y = Math.abs(child.y - this.y);
    switch (HEURISTIC) {
      case "dd":
        // Diagonal Distance
        return x > y ? x : y;
      case "md":
        // Manhattan Distance
        return x + y;
    }

  }
}