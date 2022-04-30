// Cells
export const EMPTY = 'empty'
export const WALL = 'wall'
export const BLOCK = 'block'
export const SUCCESS_BLOCK = 'success_block'
export const TARGET = 'void'
export const PLAYER = 'player'
export const NOTHING = 'nothing'

export const directions = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
}

export const keys = {
  [directions.up]: 'ArrowUp',
  [directions.down]: 'ArrowDown',
  [directions.left]: 'ArrowLeft',
  [directions.right]: 'ArrowRight',
  w: 'w',
  a: 'a',
  s: 's',
  d: 'd',
}

export const size = {
  height: 675,
  width: 675,
}

export const multiplier = 75

export const colors = {
  empty: { fill: '#ded7b3', stroke: '#ded7b3' },
  wall: { fill: '#868687', stroke: '#505051' },
  block: { fill: '#d9ae0a', stroke: '#C79300' },
  success_block: { fill: '#4ccd5a', stroke: '#3ca448' },
  void: { fill: '#dfbbb1', stroke: '#ca8e7d' },
  player: { fill: '#4f99e8', stroke: '#3f7ab9' },
}

export const levelOneMap = [
  [EMPTY, EMPTY, WALL, WALL, WALL, WALL, WALL, EMPTY],
  [WALL, WALL, WALL, EMPTY, EMPTY, EMPTY, WALL, EMPTY],
  [WALL, TARGET, PLAYER, BLOCK, EMPTY, EMPTY, WALL, EMPTY],
  [WALL, WALL, WALL, EMPTY, BLOCK, TARGET, WALL, EMPTY],
  [WALL, TARGET, WALL, WALL, BLOCK, EMPTY, WALL, EMPTY],
  [WALL, EMPTY, WALL, EMPTY, TARGET, EMPTY, WALL, WALL],
  [WALL, BLOCK, EMPTY, SUCCESS_BLOCK, BLOCK, BLOCK, TARGET, WALL],
  [WALL, EMPTY, EMPTY, EMPTY, TARGET, EMPTY, EMPTY, WALL],
  [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
]