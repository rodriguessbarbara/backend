const Controller = require("./Controller");
const EnderecoServices = require("../services/EnderecoServices");

const enderecoServices = new EnderecoServices();

class EnderecoController extends Controller {
	constructor() {
		super(enderecoServices);
	}
}

module.exports = EnderecoController;
