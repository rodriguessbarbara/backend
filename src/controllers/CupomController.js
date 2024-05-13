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
			if (!dataCupom) {
				return response.status(422).send("Dados incompletos");
			}
			const resultado = await cupomServices.verificaCupom(dataCupom.nome);
			if (resultado.tipo === "TROCA" || resultado.tipo === "DEVOLUÇÃO") {
				const clienteId = request.body.cliente_id;
				if (resultado.cliente_id != clienteId) {
					return response.status(422).send("Cupom inválido");
				}
			}

			return response.status(201).json(resultado);
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

	async findCuponsByClienteId(request, response) {
		const clienteId = request.params.clienteId;
		try {
			if (clienteId && Number(clienteId)) {
				const resultado = await cupomServices.getCuponsByClienteId(clienteId);
				return response.status(201).json(resultado);
			} else {
				response.status(422);
				response.send("Id inválido");
			}
		} catch (err) {
			response.status(500);
			response.send("erro: " + err);
		}
	}
}

module.exports = CupomController;
