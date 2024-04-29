const Controller = require("./Controller");
const CupomServices = require("../services/CupomServices");

const cupomServices = new CupomServices();

class CupomController extends Controller {
	constructor() {
		super(cupomServices);
	}

	async checkCupom(request, response) {
		const dataCupom = request.body;

		try {
			if (request.body) {
				const resultado = await cupomServices.verificaCupom(dataCupom.nome);

				return response.status(201).json(resultado);
			} else {
				response.status(422);
			}
		} catch (error) {
			if (error.message === "Código não ativo") {
				return response.send("Código não ativo");
			}
			if (error.message === "Código inválido") {
				return response.send("Código inválido");
			}
			return response.status(500).send(error.message);
		}
	}
}

module.exports = CupomController;
