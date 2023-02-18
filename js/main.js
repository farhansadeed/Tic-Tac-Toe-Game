

// console.log(myFloat);


// console.log(Number(myString) === myNumber);

// console.log(Number("Farn")); 

// console.log(Number(true));

// console.log(Number.parseFloat(myFloat));
// console.log(Number.parseInt(myNum).toFixed(2));

// console.log(Number.isNaN(NaN));

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI)); // removes allthe decimals
// console.log(Math.round(3.4));
// console.log(Math.round(3.5)); // rounds up numbers like giving here result 4
// console.log(Math.ceil(3.5)); // rounds up numbers like giving here result 4

// console.log(Math.pow(3, 3));
// console.log(Math.min(2, 5, 0.5));
// // console.log(Math.max(2, 9.2, 0.5));
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// b = Math.floor(Math.random() * 5 + 1);
// console.log("Farhan".charAt(b));

 
// const anyName = "Farhan";
// console.log(anyName.charAt(Math.floor(Math.random() * anyName)));

// let customerIsBanned = false;
// let coffee = "Americano";
// let reply;
// if (customerIsBanned) {
//   reply = 'Sorry, no coffee or you';
// } else if (coffee) {
//    reply = `Here is your order for an ${coffee}`;
// } else
// {
//   reply = 'Sorry, we are out of coffee';
// }
// console.log(reply);

// let testScore = 99;
// let collegeStudent = true;
// let grade;

// if (testScore >= 90) {
//   grade = 'A'
//   if (testScore >=99) {
//     grade = 'S';
//   }
// } else if (testScore >= 80) {
//   grade = 'B';
// } else if (testScore >= 70) {
//   grade = 'C';
// } else if (testScore >= 60) {
//   grade = 'D'
// } else {
//   if (collegeStudent) {
//     grade = 'U';
//   } else {
//     grade = 'F';
//   }
// }
// console.log(grade);

// let playerOne = 'paper';
// let Computer = 'rock';
// let reply;
// if (playerOne === Computer) {
//   reply = 'Tie Game';
// } else if (playerOne === 'rock' ) {
//   if (Computer === 'paper') {
//     reply = 'Computer Wins';
//   } else {
//     reply = 'Player Wins';
//   }
// } else if (playerOne === 'scissors') {
//   if (Computer === 'rock') {
//     reply = 'Computer Wins';
//   } else {
//     reply = 'Player Wins';
//   }
// } else if (playerOne === 'paper') {
//   if (Computer === 'scissors') {
//     reply = 'Computer Wins';
//   } else {
//     reply = 'Player Wins';
//   }
// }
// console.log(reply);

// switch(Math.floor(Math.random() * 5 + 1)) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   case 4:
//     console.log(4);
//     break;
//   default:
//     console.log("No match");
// }

// let playerOne = "paper";
// let computer = "scissors";
 
// switch (playerOne) {
//   case computer:
//     console.log('Its a tie game');
//     break;
  
//   case "rock":
//     if (computer === "paper") {
//       console.log('Computer Wins');
//     } else {
//       console.log('Player Wins');
//     }
//     break;
  
//   case "scissors":
//     if (computer === "paper") {
//       console.log('Player Wins');
//     } else {
//       console.log('Computer Wins');
//     }
//     break;  
//   default:
//     if (computer === "rock") {
//       console.log("Player Wins");
//     } else {
//       console.log('Computer Wins');
//     }  
// }

// Ternary operator

// condition ? ifTrue : ifFalse; 

// let soup = "Chicken Noodle soup";
// let response = soup ? "Yes, we do" : "No, we dont";
// console.log(response);

/*
let playgame = confirm("Shall we play rock, paper, or scissors");
if (playgame) {
  let playerChoice = prompt("Please enter rock, paper or scissors");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors"; 

      let result = playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("ok, thanks for playing");
    } else {
      alert("Invalid input. Please enter rock, paper, or scissors.");
    }
  } else {
    alert("You did not enter anything. Please enter rock, paper, or scissors.");
  }
} else {
  alert("Ok, maybe next time.");
}
*/

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



