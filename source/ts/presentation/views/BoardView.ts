import { Matrix } from "../../shared/types";

export interface IBoardView {
  renderMatrix(matrix: Matrix): void;
  renderButtons(cols: number, onClick: (col: number, btn: HTMLButtonElement) => void): void;
  updateBadge(btn: HTMLButtonElement, value: number): void;
  updateMoveText(text: string): void;
}

export class BoardView implements IBoardView {
  constructor(
    private boardEl: HTMLElement,
    private buttonsEl: HTMLElement,
    private moveTextEl: HTMLElement
  ) {}

  renderMatrix(matrix: Matrix) {
    this.boardEl.innerHTML = "";

    matrix.forEach(row => {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      row.forEach(cell => {
        const cellDiv = document.createElement("div");
        cellDiv.className = "cell";

        cellDiv.innerHTML = `<div class="inner"><span>${cell}</span></div>`;
        rowDiv.appendChild(cellDiv);
      });

      this.boardEl.appendChild(rowDiv);
    });
  }

  renderButtons(cols: number, onClick: (col: number, btn: HTMLButtonElement) => void) {
    this.buttonsEl.innerHTML = "";

    for (let i = 1; i <= cols; i++) {
      const btn = document.createElement("button");
      btn.className = "col-btn";
      btn.textContent = i.toString();

      btn.addEventListener("click", () => onClick(i, btn));

      this.buttonsEl.appendChild(btn);
    }
  }

  updateBadge(btn: HTMLButtonElement, value: number) {
    let badge = btn.querySelector(".badge");

    if (!badge) {
      badge = document.createElement("div");
      badge.className = "badge";
      btn.appendChild(badge);
    }

    badge.textContent = value.toString();
  }

  updateMoveText(text: string) {
    this.moveTextEl.textContent = text;
  }
}