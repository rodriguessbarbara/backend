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
router.patch("/pedidos/recusar/:id", (request, response) => {
	pedidoController.recusarPedido(request, response);
});
router.patch("/pedidos/cancelar/:id", (request, response) => {
	pedidoController.cancelarPedido(request, response);
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
router.patch("/pedidos/recusar-troca/:id", (request, response) => {
	pedidoController.recusarTroca(request, response);
});
router.patch("/pedidos/confirmar-recebimento/:id", (request, response) => {
	pedidoController.confirmarRecebimento(request, response);
});
router.patch("/pedidos/retornar-estoque/:id", (request, response) => {
	pedidoController.retornarEstoque(request, response);
});

//STATUS VENDAS - USER
router.patch("/pedidos/solicitar-troca/:id", (request, response) => {
	pedidoController.solicitarTroca(request, response);
});
router.patch("/pedidos/solicitar-troca-item/:id", (request, response) => {
	pedidoController.solicitarTrocaItem(request, response);
});
router.patch("/pedidos/enviar-itens/:id", (request, response) => {
	pedidoController.enviarItens(request, response);
});
router.patch("/pedidos/solicitar-cancelamento/:id", (request, response) => {
	pedidoController.solicitarCancelamento(request, response);
});

module.exports = router;
