const Controller = require("./Controller");
const CartaoServices = require("../services/CartaoServices");

const cartaoServices = new CartaoServices();

class CartaoController extends Controller {
	constructor() {
		super(cartaoServices);
	}
}

module.exports = CartaoController;
