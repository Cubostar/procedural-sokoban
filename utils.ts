import { EMPTY, WALL, BLOCK, SUCCESS_BLOCK, TARGET, PLAYER, levelOneMap } from './constants.js'

// Helpers
export const isBlock = (cell) => [BLOCK, SUCCESS_BLOCK].includes(cell)
export const isPlayer = (cell) => [PLAYER].includes(cell)
export const isTraversible = (cell) => [EMPTY, TARGET].includes(cell)
export const isWall = (cell) => [WALL].includes(cell)
export const isVoid = (cell) => [TARGET, SUCCESS_BLOCK].includes(cell)

export const getX = (x, direction, spaces = 1) => {
  if (direction === 'up' || direction === 'down') {
    return x
  }
  if (direction === 'right') {
    return x + spaces
  }
  if (direction === 'left') {
    return x - spaces
  }
}

export const getY = (y, direction, spaces = 1) => {
  if (direction === 'left' || direction === 'right') {
    return y
  }
  if (direction === 'down') {
    return y + spaces
  }
  if (direction === 'up') {
    return y - spaces
  }
}

export function generateGameBoard({ level }) {
  if (level === 1) {
    return JSON.parse(JSON.stringify(levelOneMap)) // clone deep hack
  }
}

export function countBlocks(blockCount, y, x, direction, board) {
  if (isBlock(board[y][x])) {
    blockCount++
    return countBlocks(blockCount, getY(y, direction), getX(x, direction), direction, board)
  } else {
    return blockCount
  }
}

/**
 * 
 * @param min lower bound 
 * @param max upper bound
 * @returns random integer between lower and upper bound (inclusive)
 */
export function getRndInteger(min: number, max: number): number{
  return Math.floor(Math.random() * (max - min) ) + min;
}

function rotate90(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[y][x] = a[w - 1 - x][y];
    }
  }

  return b;
}

function rotate180(a) {
  const w = a[0].length;
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let n = h - 1 - y;
    b[n] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[n][w - 1 - x] = a[y][x];
    }
  }

  return b;
}

function rotate270(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[y][x] = a[x][h - 1 - y];
    }
  }

  return b;
}

export function hflip(a) {
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let w = a[y].length;
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      let n = w - 1 - x;
      b[y][n] = a[y][x];
    }
  }

  return b;
}

export function vflip(a) {
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let w = a[y].length;
    let n = h - 1 - y;
    b[n] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[n][x] = a[y][x];
    }
  }

  return b;
}

export function rotate(a, deg) {
  if (deg % 90 !== 0) {
    throw new Error('Invalid input; degrees must be a multiple of 90');
  }

  const d = (deg % 360 + 360) % 360;

  if (d === 90) {
    return rotate90(a);
  } else if (d === 180) {
    return rotate180(a);
  } else if (d === 270) {
    return rotate270(a);
  }

  return a;
}
