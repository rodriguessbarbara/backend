const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController");
const EnderecoController = require("../controllers/EnderecoController");
const PedidoController = require("../controllers/PedidoController");

const clienteController = new ClienteController();
const enderecoController = new EnderecoController();
const pedidoController = new PedidoController();

const router = Router();

router.get("/clientes", (request, response) => {
	clienteController.findTudoCliente(request, response);
});
router.get("/clientes/:id", (request, response) => {
	clienteController.findTudoClienteById(request, response);
});
router.post("/clientes", (request, response) => {
	clienteController.createEntidade(request, response);
});
router.post("/clientes/login", (request, response) => {
	clienteController.checkCliente(request, response);
});
router.patch("/clientes/:id", (request, response) => {
	clienteController.updateEntidade(request, response);
});
router.delete("/clientes/:id", (request, response) => {
	clienteController.deleteEntidade(request, response);
});

//pedidos
// router.get("/clientes/:id/pedidos", (request, response) => {
// 	pedidoController.findTodos(request, response);
// });
// router.post("/clientes/:id/pedidos", (request, response) => {
// 	pedidoController.createEntidade(request, response);
// });
// router.patch("/clientes/:id/pedidos/:id", (request, response) => {
// 	pedidoController.updateEntidade(request, response);
// });

module.exports = router;
