const traverse = function() {
  // Get smallest f node in open list
  let indexOfCurrent = 0;
  let current = openList[0];
  for (let x = 0; x < openList.length; x++) {
    if (openList[x].f < current.f) {
      current = openList[x];
      indexOfCurrent = x;
    }
  }

  if (current === target) {
    noLoop();
    return;
  }

  // Traversing
  if (indexOfCurrent > -1) {
    openList.splice(indexOfCurrent, 1);
  }

  closedList.push(current);
  current.addSuccessors(grid);
  current.successors.forEach(child => {
    if (closedList.includes(child)) {
      return;
    }

    child.g = current.g + current.getDistance(child);
    child.h = target.getDistance(child);
    child.f = child.g + child.h;

    if (openList.includes(child) && child.g > current.g) {
      return;
    }

    openList.push(child);
  });

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
}