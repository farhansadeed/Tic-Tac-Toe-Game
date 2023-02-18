let currentPlayer = "X";
let gameOver = false;
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#reset");

function init() {
  const mark = prompt("Do you want to take X or O for playing?").toUpperCase();
  currentPlayer = mark === "X" ? "X" : "O";
  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });
  resetButton.addEventListener("click", resetGame);
  render();
}

function handleCellClick(event) {
  if (gameOver) return;
  const row = event.target.id[0];
  const col = event.target.id[1];
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
    checkForWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    render();
  }
}

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    // Check rows
    if (gameBoard[i][0] !== "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
      gameOver = true;
      return;
    }
    // Check columns
    if (gameBoard[0][i] !== "" && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
      gameOver = true;
      return;
    }
  }
  // Check diagonals
  if (gameBoard[0][0] !== "" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
    gameOver = true;
    return;
  }
  if (gameBoard[0][2] !== "" && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
    gameOver = true;
    return;
  }
  // Check for a tie game
  let isTie = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        isTie = false;
        break;
      }
    }
  }
  if (isTie) {
    gameOver = true;
  }
}

function render() {
  gameBoard.forEach((row, i) => {
    row.forEach((cell, j) => {
      document.getElementById(`${i}${j}`).textContent = cell;
    });
  });
  if (gameOver) {
    if (!checkForWinner()) {
      alert("Tie game!");
    }
    cells.forEach(cell => {
      cell.removeEventListener("click", handleCellClick);
    });
  }
}

function resetGame() {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = "X";
  gameOver = false;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.addEventListener("click", handleCellClick);
  });
}

init();



