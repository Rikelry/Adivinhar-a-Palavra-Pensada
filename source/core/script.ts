type Matrix = string[][];

let matrix: Matrix = [
  ["A","B","C","D","E"],
  ["F","G","H","I","J"],
  ["K","L","M","N","O"],
  ["P","Q","R","S","T"],
  ["U","V","W","X","Y"],
  ["Z","","","",""]
];

const board = document.getElementById("board")!;

// renderiza matriz
function renderMatrix(mat: Matrix) {
  board.innerHTML = "";

  mat.forEach(row => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    row.forEach(cell => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";
      cellDiv.textContent = cell;

      rowDiv.appendChild(cellDiv);
    });

    board.appendChild(rowDiv);
  });
}

// pega coluna
function getColumn(mat: Matrix, col: number): string[] {
  return mat.map(row => row[col] || "");
}

// próxima matriz
function nextMatrix(mat: Matrix, picks: number[]): Matrix {
  return picks.map(p => getColumn(mat, p - 1));
}

// input
document.getElementById("btn")!.addEventListener("click", () => {
  const value = (document.getElementById("input") as HTMLInputElement).value;

  const picks = value.split(",").map(n => parseInt(n.trim()));

  matrix = nextMatrix(matrix, picks);

  renderMatrix(matrix);
});

function animateCells() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, i) => {
    setTimeout(() => {
      cell.classList.add("reveal");
    }, i * 50);
  });
}

renderMatrix(matrix);
animateCells();