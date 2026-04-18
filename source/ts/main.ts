import { MatrixModel } from "./domain/models/Matrix";
import { SelectionModel } from "./domain/models/Selection";
import { MatrixService } from "./domain/services/MatrixService";
import { GameUseCase } from "./application/GameUseCase";
import { BoardView } from "./presentation/views/BoardView";
import { GameController } from "./presentation/controllers/GameController";

const matrix = new MatrixModel([
  ["A","B","C","D","E"],
  ["F","G","H","I","J"],
  ["K","L","M","N","O"],
  ["P","Q","R","S","T"],
  ["U","V","W","X","Y"],
  ["Z","","","",""]
]);

const selection = new SelectionModel();
const service = new MatrixService();

const useCase = new GameUseCase(matrix, selection, service);

const view = new BoardView(
  document.getElementById("board")!,
  document.getElementById("columnButtons")!,
  document.getElementById("currentMove")!
);

const controller = new GameController(
  useCase,
  view,
  document.getElementById("confirm")!
);

controller.init();