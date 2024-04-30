const Services = require("./Services");
const data = require("../models/index");

class CategoriaServices extends Services {
	constructor() {
		super("Categoria");
	}
}

module.exports = CategoriaServices;
