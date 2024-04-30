const { Router } = require("express");
const LivroController = require("../controllers/LivroController");

const livroController = new LivroController();
const router = new Router();

router.get("/livros", (request, response) => {
	livroController.findTodosLivros(request, response);
});

router.get("/livros/:id", (request, response) => {
	livroController.findEntidadeById(request, response);
});

router.get("/livros/nome/:nome", (request, response) => {
	livroController.findLivrosByNome(request, response);
});

router.post("/livros", (request, response) => {
	livroController.criarLivro(request, response);
});

router.patch("/livros/:id", (request, response) => {
	livroController.updateEntidade(request, response);
});

router.delete("/livros/:id", (request, response) => {
	livroController.deleteEntidade(request, response);
});

module.exports = router;
