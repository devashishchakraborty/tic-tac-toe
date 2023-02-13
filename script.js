const gameBoard = (() => {
    const board = [];
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i].push("")
        }
    }
    const setBoard = function(row, column, turn){
        if (turn === "Player1") board[row][column] = "X";
        else board[row][column] = "O";
    }

    const getBoard = () => board;
    return { getBoard, setBoard }
})();

function updateScreen() {
    const boardCells = document.querySelectorAll(".boardCell");
    boardCells.forEach(function (boardCell) {
        boardCell.addEventListener("click", function (event) {
            const elementRow = boardCell.getAttribute("row");
            const elementColumn = boardCell.getAttribute("column");
            gameBoard.setBoard(elementRow, elementColumn);
            boardCell.textContent = gameBoard.getBoard()[elementRow][elementColumn];
        })
    });
}

updateScreen();