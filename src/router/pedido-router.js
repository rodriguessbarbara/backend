const { Router } = require("express");
const PedidoController = require("../controllers/PedidoController");

const pedidoController = new PedidoController();
const router = Router();

router.post("/pedido", (request, response) => {
	pedidoController.createEntidade(request, response);
});
router.get("/pedido", (request, response) => {
	pedidoController.findTodos(request, response);
});
router.get("/pedido/:id", (request, response) => {
	pedidoController.findEntidadeById(request, response);
});
router.patch("/pedido/:id", (request, response) => {
	pedidoController.updateEntidade(request, response);
});
router.delete("/pedido/:id", (request, response) => {
	pedidoController.deleteEntidade(request, response);
});

module.exports = router;
