import { Matrix } from "../../shared/types";
import { MatrixModel } from "../models/Matrix";

export interface IMatrixService {
  generateNext(matrix: MatrixModel, picks: number[]): Matrix;
}

export class MatrixService implements IMatrixService {
  generateNext(matrix: MatrixModel, picks: number[]): Matrix {
    return picks.map(p => matrix.getColumn(p - 1));
  }
}