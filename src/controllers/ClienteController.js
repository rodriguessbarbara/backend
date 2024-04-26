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

	async findTudoCliente(request, response) {
		try {
			const clientes = await clienteServices.chamaTudoClientes();
			if (!clientes.length) {
				return response.status(404).send("Nenhum cliente encontrado.");
			}
			return response.status(200).json(clientes);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	async findTudoClienteById(request, response) {
		try {
			const id = request.params.id;
			const clientes = await clienteServices.chamaTudoClienteById(id);
			if (!clientes) {
				return response.status(404).send("Nenhum cliente encontrado.");
			}
			return response.status(200).json(clientes);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	//criar um CRUD que tenha informações do Cartao e Endereco
}

module.exports = ClienteController;
