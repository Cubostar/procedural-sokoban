import { EMPTY, WALL, NOTHING} from './constants.js'

const template1 = [
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template2 = [
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template3 = [
    [NOTHING, NOTHING, NOTHING, EMPTY, EMPTY],
    [NOTHING, WALL, WALL, EMPTY, EMPTY],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template4 = [
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    [NOTHING, WALL, WALL, WALL, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template5 = [
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    [NOTHING, WALL, WALL, WALL, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template6 = [
    [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, EMPTY, EMPTY, WALL, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template7 = [
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
]

const template8 = [
    [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
    [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
    [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
    [NOTHING, WALL, EMPTY, WALL, NOTHING],
    [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
]