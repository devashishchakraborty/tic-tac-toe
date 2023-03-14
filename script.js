const gameBoard = (() => {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push("")
        }
    }
    const setBoard = function(row, column, turn){
        board[row][column] = turn;
    }

    const getBoard = () => board;
    return { getBoard, setBoard }
})();

const displayController = (() => {
    const boardCells = document.querySelectorAll(".boardCell");
    let turn = "X";
    const updateBoard = () => {
        boardCells.forEach(function (boardCell) {
            boardCell.addEventListener("click", function (event) {
                if (boardCell.textContent === ""){

                    const elementRow = boardCell.getAttribute("row");
                    const elementColumn = boardCell.getAttribute("column");
                    
                    gameBoard.setBoard(elementRow, elementColumn, turn);
                    boardCell.textContent = gameBoard.getBoard()[elementRow][elementColumn];
    
                    if (turn === "X") turn = "O";
                    else if (turn === "O") turn = "X";
                }
            })
        });
    }

    return {updateBoard};
})();

displayController.updateBoard();