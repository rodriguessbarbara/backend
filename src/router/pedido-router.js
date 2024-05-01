const { Router } = require("express");
const PedidoController = require("../controllers/PedidoController");

const pedidoController = new PedidoController();
const router = Router();

//CRUD
router.post("/pedidos", (request, response) => {
	pedidoController.criarPedido(request, response);
});
router.get("/pedidos", (request, response) => {
	pedidoController.findTodosPedidos(request, response);
});
router.get("/pedidos/:id", (request, response) => {
	pedidoController.findPedidosById(request, response);
});
router.delete("/pedidos/:id", (request, response) => {
	pedidoController.deleteEntidade(request, response);
});

//STATUS VENDAS - ADMIN
router.patch("/pedidos/confirmar/:id", (request, response) => {
	pedidoController.confirmarPedido(request, response);
});
router.patch("/pedidos/despachar/:id", (request, response) => {
	pedidoController.despacharProdutos(request, response);
});
router.patch("/pedidos/confirmar-entrega/:id", (request, response) => {
	pedidoController.confirmarEntrega(request, response);
});
router.patch("/pedidos/autorizar-troca/:id", (request, response) => {
	pedidoController.autorizarTroca(request, response);
});
router.patch("/pedidos/confirmar-recebimento/:id", (request, response) => {
	pedidoController.confirmarRecebimento(request, response);
});

//STATUS VENDAS - USER
router.patch("/pedidos/solicitar-troca/:id", (request, response) => {
	pedidoController.solicitarTroca(request, response);
});

module.exports = router;
