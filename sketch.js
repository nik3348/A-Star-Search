const ROWS = 20;
const COLS = 35;
const SHOW_NUMBERS = false;
let CELLSIZE;

let grid;
let source;
let target;
let openList = Array();
let closedList = Array();

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

  closedList.forEach(node => node.show(color(0, 0, 255)));
  openList.forEach(node => node.show(color(255, 0, 100)));

  source.show(color(0, 255, 0));
  target.show(color(255, 0, 0));
}

  // TODO: Last node -1 for some reason