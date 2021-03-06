const traverse = function() {
  // Get smallest f node in open list
  let indexOfCurrent = 0;
  current = openList[0];
  for (let x = 0; x < openList.length; x++) {
    if (openList[x].f < current.f) {
      current = openList[x];
      indexOfCurrent = x;
    } else if (openList[x].f === current.f) {
      if (openList[x].h < current.h) {
        current = openList[x];
        indexOfCurrent = x;
      }
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

    if (!openList.includes(child)) {
      child.g = current.g + current.getDistance(child);
      child.h = target.getDistance(child);
      child.f = child.g + child.h;
      child.parent = current
      openList.push(child);
    } else {
      let temp = current.g + current.getDistance(child);
      if (child.g > temp) {
        child.g = temp;
        child.f = child.g + child.h;
        child.parent = current;
      }
    }
  });
}