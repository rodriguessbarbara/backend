const Controller = require("./Controller");
const PedidoServices = require("../services/PedidoServices");

const pedidoServices = new PedidoServices();

class PedidoController extends Controller {
	constructor() {
		super(pedidoServices);
	}
}

module.exports = PedidoController;
