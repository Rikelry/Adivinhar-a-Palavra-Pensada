type Matrix = string[][];

// Matriz inicial (A-Z)
function createInitialMatrix(): Matrix {
  return [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "Q", "R", "S", "T"],
    ["U", "V", "W", "X", "Y"],
    ["Z", "", "", "", ""],
  ];
}

function getColumn(matrix: Matrix, colIndex: number): string[] {
  return matrix.map(row => row[colIndex] ?? "");
}

function nextMatrix(matrix: Matrix, picks: number[]): Matrix {
  const newMatrix: Matrix = [];

  for (const pick of picks) {
    const colIndex = pick - 1; // usuário usa base 1
    const column = getColumn(matrix, colIndex);
    newMatrix.push(column);
  }

  return newMatrix;
}

function printMatrix(matrix: Matrix) {
  console.log(
    matrix.map(row => JSON.stringify(row)).join("\n")
  );
}

function playGame(rounds: number, moves: number[][]) {
  let matrix = createInitialMatrix();

  console.log("Matriz inicial:");
  printMatrix(matrix);
  console.log("\n");

  for (let i = 0; i < rounds; i++) {
    const picks = moves[i];

    console.log(`[PROMPT]: ${JSON.stringify(picks)}`);

    matrix = nextMatrix(matrix, picks);

    console.log("[LOG]:");
    printMatrix(matrix);
    console.log("\n");
  }
}

playGame(4, [
  [3, 3, 1, 1],
  [1, 4, 5, 6],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]);