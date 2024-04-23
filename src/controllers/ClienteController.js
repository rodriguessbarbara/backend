const Controller = require("./Controller");
const ClienteServices = require("../services/ClienteServices");

const clienteServices = new ClienteServices();

class ClienteController extends Controller {
	constructor() {
		super(clienteServices);
	}

	async checkCliente(request, response) {
		const dataCliente = request.body;

		try {
			if (request.body.email && request.body.senha) {
				const resultado = await clienteServices.verificaCliente(
					dataCliente.email,
					dataCliente.senha
				);

				return response.status(201).json(resultado);
			} else {
				response.status(422);
			}
		} catch (err) {
			if (err.message === "Usuário e/ou senha incorreto") {
				return response.status(401).send("Usuário e/ou senha incorreto");
			} else {
				return response.status(500).send(err.message);
			}
		}
	}
}

module.exports = ClienteController;
