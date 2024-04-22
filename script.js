let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let message = document.getElementById("message");
let winGif = document.getElementById("winGif");

function placeMarker(cellIndex) {
  if (!cells[cellIndex].innerText) {
    cells[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      message.innerText = `Player ${currentPlayer} wins!`;
      winGif.classList.remove("hidden");
      disableCells();
    } else if (checkDraw()) {
      message.innerText = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText;
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.innerText);
}

function disableCells() {
  cells.forEach(cell => {
    cell.style.pointerEvents = "none";
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.innerText = "";
    cell.style.pointerEvents = "auto";
  });
  currentPlayer = "X";
  message.innerText = "";
  winGif.classList.add("hidden");
}
