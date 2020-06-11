// Settings
const ROWS = 20;
const COLS = 38;
const SHOW_NUMBERS = false;
const HEURISTIC = "md"
let CELLSIZE;

let grid;
let source;
let target;
let openList = Array();
let closedList = Array();
let blockedList = Array();

function setup() {
  const DISPLAYHEIGHT = displayHeight - 200;
  const DISPLAYWIDTH = displayWidth - 200;
  CELLSIZE = DISPLAYHEIGHT / ROWS;

  createCanvas(DISPLAYWIDTH, DISPLAYHEIGHT);
  background(0);

  grid = initGrid();

  grid[3][0].isBlocked = true;
  grid[3][1].isBlocked = true;
  grid[3][2].isBlocked = true;
  grid[3][3].isBlocked = true;
  grid[3][4].isBlocked = true;
  grid[3][5].isBlocked = true;
  grid[3][6].isBlocked = true;
  grid[3][7].isBlocked = true;

  source = grid[0][0]
  target = grid[COLS - 1][ROWS - 1]

  openList.push(source);
}

function draw() {
  traverse();

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

  source.show(color(0, 255, 0));
  target.show(color(255, 0, 0));
}

  // TODO: Last node -1 for some reason