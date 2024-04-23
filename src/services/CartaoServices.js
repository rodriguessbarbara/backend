const Services = require("./Services");
const data = require("../models/index");

class CartaoServices extends Services {
	constructor() {
		super("Cartao");
	}
}

module.exports = CartaoServices;
