import { Matrix } from "../../shared/types";

export class MatrixModel {
  constructor(private data: Matrix) {}

  get value(): Matrix {
    return this.data;
  }

  getColumn(index: number): string[] {
    return this.data.map(row => row[index] || "");
  }

  update(newMatrix: Matrix) {
    this.data = newMatrix;
  }
}