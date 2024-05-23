const Controller = require("./Controller");
const ClienteServices = require("../services/ClienteServices");

const clienteServices = new ClienteServices();

class ClienteController extends Controller {
	constructor() {
		super(clienteServices);
	}

	async criarCliente(request, response) {
		try {
			const novoCliente = request.body;
			const clienteCriado = await clienteServices.createCliente(novoCliente);
			response.status(201).json(clienteCriado);
		} catch (error) {
			response.status(400).json(error.message);
		}
	}

	async login(request, response) {
		const dataCliente = request.body;

		try {
			const loginResposta = await clienteServices.login(
				dataCliente.email,
				dataCliente.senha
			);

			response.status(201).json(loginResposta);
		} catch (error) {
			response.status(400).json(error.message);
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

	async findTudoClienteToken(request, response) {
		const id = request.clienteId;

		try {
			const clientes = await clienteServices.chamaTudoClienteById(id);
			if (!clientes) {
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

	async updateSenhaCliente(request, response) {
		const novaSenha = request.body;
		const id = request.params.id;

		try {
			const resultado = await clienteServices.atualizaSenhaCliente(
				id,
				novaSenha.senha
			);

			response.status(201).send("Atualizado com sucesso");
		} catch (error) {
			response.status(400).json(error.message);
		}
	}
}

module.exports = ClienteController;
