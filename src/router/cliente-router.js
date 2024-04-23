const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController");

const clienteController = new ClienteController();
const router = Router();

router.get("/clientes", (request, response) => {
	clienteController.findTudoCliente(request, response);
});

router.get("/clientes/:id", (request, response) => {
	clienteController.findEntidadeById(request, response);
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

module.exports = router;
