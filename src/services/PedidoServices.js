const Services = require("./Services");
const data = require("../models/index");

class PedidoServices extends Services {
	constructor() {
		super("Pedido");
	}
}

module.exports = PedidoServices;
