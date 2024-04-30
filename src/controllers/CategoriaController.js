const Controller = require("./Controller");
const CategoriaServices = require("../services/CategoriaServices");

const categoriaServices = new CategoriaServices();

class CategoriaController extends Controller {
	constructor() {
		super(categoriaServices);
	}
}

module.exports = CategoriaController;
