const { Router } = require("express");
const ClienteController = require("../controllers/ClienteController");
const autenticado = require("../middleware/autenticado");

const clienteController = new ClienteController();

const usuarioRouter = new Router();

usuarioRouter.post("/clientes/auth/login", (request, response) => {
	clienteController.login(request, response);
});
usuarioRouter.get("/validate-token", (request, response) => {
	clienteController.validarToken(request, response);
});
usuarioRouter.post("/clientes", (request, response) => {
	clienteController.criarCliente(request, response);
});
usuarioRouter.get("/clientes", (request, response) => {
	clienteController.findTudoCliente(request, response);
});
usuarioRouter.get("/clientes/nome/:nome", (request, response) => {
	clienteController.findClienteByNome(request, response);
});

usuarioRouter.use(autenticado);

usuarioRouter.get("/cliente", (request, response) => {
	clienteController.findTudoClienteToken(request, response);
});
usuarioRouter.get("/clientes/:id", (request, response) => {
	clienteController.findTudoClienteById(request, response);
});
usuarioRouter.patch("/clientes/:id", (request, response) => {
	clienteController.updateEntidade(request, response);
});
usuarioRouter.patch("/clientes/senha/:id", (request, response) => {
	clienteController.updateSenhaCliente(request, response);
});
usuarioRouter.delete("/clientes/:id", (request, response) => {
	clienteController.deleteEntidade(request, response);
});

module.exports = usuarioRouter;
