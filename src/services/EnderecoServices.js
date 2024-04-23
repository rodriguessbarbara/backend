const Services = require("./Services");
const data = require("../models/index");

class EnderecoServices extends Services {
	constructor() {
		super("Endereco");
	}
}

module.exports = EnderecoServices;
