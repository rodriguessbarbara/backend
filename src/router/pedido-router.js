const { Router } = require("express");
const PedidoController = require("../controllers/PedidoController");

const pedidoController = new PedidoController();
const router = Router();

router.post("/pedidos", (request, response) => {
	pedidoController.createEntidade(request, response);
});
router.get("/pedidos", (request, response) => {
	pedidoController.findTodos(request, response);
});
router.get("/pedidos/:id", (request, response) => {
	pedidoController.findEntidadeById(request, response);
});
router.patch("/pedidos/:id", (request, response) => {
	pedidoController.updateEntidade(request, response);
});
router.delete("/pedidos/:id", (request, response) => {
	pedidoController.deleteEntidade(request, response);
});

module.exports = router;
