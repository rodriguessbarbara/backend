const { Router } = require("express");
const GraficoController = require("../controllers/GraficoController");

const graficoController = new GraficoController();
const router = Router();

router.post("/grafico/buscar-pedidos", (request, response) => {
	graficoController.findConsultaGrafico(request, response);
});

module.exports = router;
