const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController");

const categoriaController = new CategoriaController();
const router = Router();

router.post("/categorias", (request, response) => {
	categoriaController.createEntidade(request, response);
});
router.get("/categorias", (request, response) => {
	categoriaController.findTodos(request, response);
});
router.get("/categorias/:id", (request, response) => {
	categoriaController.findEntidadeById(request, response);
});
router.patch("/categorias/:id", (request, response) => {
	categoriaController.updateEntidade(request, response);
});
router.delete("/categorias/:id", (request, response) => {
	categoriaController.deleteEntidade(request, response);
});

module.exports = router;
