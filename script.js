const gameBoard = (() => {
    let board = [["", "", ""], ["", "", ""], ["", "", ""]];

    const setBoard = function (row, column, turn) {
        board[row][column] = turn;
    }

    const getBoard = () => board;

    const clearBoard = function () {
        board = [["", "", ""], ["", "", ""], ["", "", ""]];
    }
    return { getBoard, setBoard, clearBoard }
})();

const displayController = (() => {
    const boardCells = document.querySelectorAll(".boardCell");
    const restartButton = document.querySelector(".restart");
    let turn = "X";
    let gameActive = true;
    let filledCellsCount = 0;

    const restartBoard = () => {
        restartButton.addEventListener("click", function () {
            gameBoard.clearBoard()
            boardCells.forEach(function (boardCell) {
                boardCell.textContent = "";
            });
            gameActive = true;
        });
    }

    const updateBoard = () => {
        boardCells.forEach(function (boardCell) {
            boardCell.addEventListener("click", function (event) {
                if (gameActive) {
                    if (boardCell.textContent === "") {

                        const elementRow = boardCell.getAttribute("row");
                        const elementColumn = boardCell.getAttribute("column");

                        gameBoard.setBoard(elementRow, elementColumn, turn);
                        boardCell.textContent = gameBoard.getBoard()[elementRow][elementColumn];

                        winner = checkResult(gameBoard.getBoard(), turn);
                        if (winner) {
                            console.log(`Player ${winner} wins`);
                            gameActive = false;
                        } else {
                            filledCellsCount++;
                        }

                        if (turn === "X") turn = "O";
                        else if (turn === "O") turn = "X";
                    }

                    if (gameActive && filledCellsCount === 9){
                        console.log("Game Tied");
                        gameActive = false;
                    }
                }
            })
        });
        restartBoard();
    }

    return { updateBoard };
})();

const checkResult = function (board, player) {
    if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
        return player;
    }
    else if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
        return player;
    }
    else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
        return player;
    }

    else if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
        return player;
    }
    else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
        return player;
    }
    else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
        return player;
    }

    else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return player;
    }
    else if (board[2][0] === player && board[1][1] === player && board[0][2] === player) {
        return player;
    }
}

displayController.updateBoard();