import { MatrixModel } from "../domain/models/Matrix";
import { SelectionModel } from "../domain/models/Selection";
import { IMatrixService } from "../domain/services/MatrixService";

export class GameUseCase {
  constructor(
    private matrix: MatrixModel,
    private selection: SelectionModel,
    private matrixService: IMatrixService
  ) {}

  getMatrix() {
    return this.matrix.value;
  }

  addSelection(col: number) {
    this.selection.add(col);
  }

  getSelections() {
    return this.selection.toArray();
  }

  getSelectionCount(col: number) {
    return this.selection.getCount(col);
  }

  confirmMove() {
    const picks = this.selection.toArray();
    if (picks.length === 0) return;

    const next = this.matrixService.generateNext(this.matrix, picks);

    this.matrix.update(next);
    this.selection.clear();
  }
}