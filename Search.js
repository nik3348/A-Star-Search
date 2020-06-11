const traverse = function() {
  // Get smallest f node in open list
  let indexOfCurrent = 0;
  let current = openList[0];
  for (let x = 0; x < openList.length; x++) {
    if (openList[x].h < current.h) {
      current = openList[x];
      indexOfCurrent = x;
    }
  }

  // Exit if target reached
  if (current === target) {
    noLoop();
    return;
  }

  // ==== Traversing
  // Take out the current item and put it into the closed list (avoid inf loops)
  if (indexOfCurrent > -1) {
    openList.splice(indexOfCurrent, 1);
  }

  closedList.push(current);
  // Generate all successors and traverse them
  current.addSuccessors(grid);
  current.successors.forEach(child => {
    // Skip closed successors
    if (closedList.includes(child)) {
      return;
    }

    // Calculate ghf
    child.g = current.g + current.getDistance(child);
    child.h = target.getDistance(child);
    child.f = child.g + child.h;

    if (openList.includes(child) && child.g > current.g) {
      return;
    }

    openList.push(child);
  });
}