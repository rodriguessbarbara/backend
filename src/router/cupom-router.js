const { Router } = require("express");
const CupomController = require("../controllers/CupomController");

const cupomController = new CupomController();
const router = Router();

router.post("/cupom", (request, response) => {
	cupomController.createEntidade(request, response);
});
router.get("/cupom", (request, response) => {
	cupomController.findTodos(request, response);
});
// router.get("/cupom/:id", (request, response) => {
// 	cupomController.findEntidadeById(request, response);
// });
router.patch("/cupom/:id", (request, response) => {
	cupomController.updateEntidade(request, response);
});
router.delete("/cupom/:id", (request, response) => {
	cupomController.deleteEntidade(request, response);
});

router.post("/cupom/validar", (request, response) => {
	cupomController.checkCupom(request, response);
});

//CUPOM VIA PEDIDO_ID
router.get("/cupom/:pedidoId", (request, response) => {
	cupomController.findCuponsByPedidoId(request, response);
});

module.exports = router;
