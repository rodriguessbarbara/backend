const Controller = require("./Controller");
const ClienteServices = require("../services/ClienteServices");

const clienteServices = new ClienteServices();

function validarSenha(senha) {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
	return regex.test(senha);
}
class ClienteController extends Controller {
	constructor() {
		super(clienteServices);
	}

	async criarCliente(request, response) {
		try {
			const novoCliente = request.body;
			const senha = request.body.senha;

			if (!validarSenha(senha)) {
				return response
					.status(400)
					.json(
						"A senha não atende aos requisitos:\n conter ao menos 8 caracteres, ter letra maiúscula, minúscula, número e carácter especial."
					);
			}

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

	async validarToken(request, response) {
		try {
			const token = request.headers.authorization;
			const userData = await clienteServices.validateToken(token);
			response.status(200).json(userData);
		} catch (err) {
			response.status(401).json(err.message);
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
			if (!validarSenha(novaSenha.senha)) {
				return response
					.status(400)
					.json(
						"A senha não atende aos requisitos: \n conter ao menos 8 caracteres, ter letra maiúscula, minúscula, número e carácter especial."
					);
			}

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
