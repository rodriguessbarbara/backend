const { Router } = require("express");
const CartaoController = require("../controllers/CartaoController");

const cartaoController = new CartaoController();
const router = Router();

router.post("/cartao", (request, response) => {
	cartaoController.createEntidade(request, response);
});
router.get("/cartao", (request, response) => {
	cartaoController.findTodos(request, response);
});
router.get("/cartao/:id", (request, response) => {
	cartaoController.findEntidadeById(request, response);
});
router.patch("/cartao/:id", (request, response) => {
	cartaoController.updateEntidade(request, response);
});
router.delete("/cartao/:id", (request, response) => {
	cartaoController.deleteEntidade(request, response);
});

module.exports = router;
