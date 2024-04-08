const { Router } = require("express");
const {
	findClientes,
	findClienteById,
	createCliente,
	checkCliente,
	updateClientes,
	deleteCliente,
} = require("../controller/cliente-controller");

const router = Router();

router.get("/", findClientes);
router.get("/:id", findClienteById);

router.post("/", createCliente);
router.post("/login", checkCliente);

router.patch("/:id", updateClientes);

router.delete("/:id", deleteCliente);

module.exports = router;
