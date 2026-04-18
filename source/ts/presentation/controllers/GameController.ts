import { GameUseCase } from "../../application/GameUseCase";
import { IBoardView } from "../views/BoardView";

export class GameController {
  constructor(
    private useCase: GameUseCase,
    private view: IBoardView,
    private confirmBtn: HTMLElement
  ) {}

  init() {
    this.render();

    this.confirmBtn.addEventListener("click", () => {
      this.useCase.confirmMove();
      this.render();
    });

    document.addEventListener("keydown", e => {
      const num = parseInt(e.key);

      if (!isNaN(num)) {
        this.useCase.addSelection(num);
        this.updateMoveText();
      }

      if (e.key === "Enter") {
        this.useCase.confirmMove();
        this.render();
      }
    });
  }

  private render() {
    const matrix = this.useCase.getMatrix();

    this.view.renderMatrix(matrix);

    this.view.renderButtons(matrix[0].length, (col, btn) => {
      this.useCase.addSelection(col);
      this.view.updateBadge(btn, this.useCase.getSelectionCount(col));
      this.updateMoveText();
    });

    this.updateMoveText();
  }

  private updateMoveText() {
    const picks = this.useCase.getSelections();

    const text =
      picks.length > 0
        ? `Jogada: ${picks.join(", ")}`
        : "Jogada: (vazia)";

    this.view.updateMoveText(text);
  }
}