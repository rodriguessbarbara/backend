const { Router } = require("express");
const {
	findClientes,
	findClienteById,
	createCliente,
	updateClientes,
	deleteCliente,
} = require("../controller/cliente-controller");

const router = Router();

router.get("/", findClientes);
router.get("/:id", findClienteById);

router.post("/", createCliente);

router.patch("/", updateClientes);

router.delete("/", deleteCliente);

module.exports = router;
