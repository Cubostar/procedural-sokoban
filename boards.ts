import { EMPTY, WALL, NOTHING} from './constants.js'

export const allBoards: Board[] = []

export interface Board {
    id: number;
    content: string[][];
}

class BoardFactory {
    private static instance: BoardFactory;

    private BoardFactory() {

    }

    public static getInstance(): BoardFactory {
        if (!BoardFactory.instance) {
            BoardFactory.instance = new BoardFactory();
        }

        return BoardFactory.instance;
    }

    public createBoard(id: number, content: string[][]): Board {
        const board = {
            id: id,
            content: content,
        }
        allBoards.push(board);
        return board
    }

}

BoardFactory.getInstance().createBoard( 1,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 2,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 3,
    [
        [NOTHING, NOTHING, NOTHING, EMPTY, EMPTY],
        [NOTHING, WALL, WALL, EMPTY, EMPTY],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 4,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 5,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 6,
    [
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, WALL, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 7,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 8,
    [
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, WALL, EMPTY, WALL, NOTHING],
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 9,
    [
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, WALL, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [NOTHING, WALL, EMPTY, WALL, NOTHING],
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
    ]
)
BoardFactory.getInstance().createBoard( 10,
    [
        [NOTHING, NOTHING, EMPTY, NOTHING, NOTHING],
        [NOTHING, WALL, EMPTY, WALL, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, EMPTY],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 11,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 12,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, EMPTY],
        [NOTHING, EMPTY, WALL, EMPTY, EMPTY],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 13,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 14,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, WALL, EMPTY, EMPTY, NOTHING],
        [EMPTY, EMPTY, EMPTY, EMPTY, NOTHING],
        [EMPTY, EMPTY, NOTHING, NOTHING, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 15,
    [
        [NOTHING, EMPTY, NOTHING, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, WALL, EMPTY, WALL, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, NOTHING, EMPTY, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 16,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
    ]
)

BoardFactory.getInstance().createBoard( 17,
    [
        [NOTHING, NOTHING, NOTHING, NOTHING, NOTHING],
        [NOTHING, WALL, WALL, WALL, NOTHING],
        [EMPTY, EMPTY, WALL, EMPTY, EMPTY],
        [NOTHING, EMPTY, EMPTY, EMPTY, NOTHING],
        [NOTHING, EMPTY, EMPTY, NOTHING, NOTHING],
    ]
)