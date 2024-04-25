const { Router } = require("express");
const EnderecoController = require("../controllers/EnderecoController");

const enderecoController = new EnderecoController();
const router = Router();

router.post("/endereco", (request, response) => {
	enderecoController.createEntidade(request, response);
});
router.get("/endereco", (request, response) => {
	enderecoController.findTodos(request, response);
});
router.get("/endereco/:id", (request, response) => {
	enderecoController.findEntidadeById(request, response);
});
router.patch("/endereco/:id", (request, response) => {
	enderecoController.updateEntidade(request, response);
});
router.delete("/endereco/:id", (request, response) => {
	enderecoController.deleteEntidade(request, response);
});

module.exports = router;
