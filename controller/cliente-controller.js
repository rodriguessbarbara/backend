const { cliente, Genero } = require("../model/cliente-model");
const {
	getClientes,
	getClientebyId,
	postCliente,
	postCheckCliente,
	updateClientebyId,
	deleteClientebyId,
} = require("../services/cliente-service");

async function findClientes(request, response) {
	try {
		console.log("iniciando conexão");
		const resultado = await getClientes();

		response.status(201);
		response.send(resultado);
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

async function findClienteById(request, response) {
	const id = request.params.id;

	try {
		console.log("iniciando conexão");

		if (id && Number(id)) {
			const resultado = await getClientebyId(id);
			response.send(resultado);
		} else {
			response.status(422);
			response.send("Id inválido");
		}
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

async function createCliente(request, response) {
	try {
		console.log("iniciando conexão");
		const novoCliente = request.body;

		if (
			request.body.nome &&
			request.body.cpf &&
			request.body.email &&
			request.body.senha &&
			request.body.genero &&
			request.body.telefone &&
			request.body.dataCadastro &&
			request.body.dataNascimento
		) {
			const resultado = await postCliente(
				novoCliente.nome,
				novoCliente.cpf,
				novoCliente.email,
				novoCliente.senha,
				novoCliente.genero,
				novoCliente.telefone,
				novoCliente.dataCadastro,
				novoCliente.dataNascimento
			);
			response.status(201);
			response.send("usuário criado com sucesso");
		} else {
			response.status(422);
			response.send("Todos os campos são obrigatórios");
		}
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

async function checkCliente(request, response) {
	const verificaCliente = request.body;

	try {
		console.log("iniciando conexão");

		if (request.body.email && request.body.senha) {
			const resultado = await postCheckCliente(
				verificaCliente.email,
				verificaCliente.senha
			);
			if (resultado != undefined) {
				response.status(201);
				response.send(resultado.id);
			} else {
				response.status(401);
				response.send("usuário e/ou senha incorreto");
			}
		} else {
			response.status(422);
		}
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

async function updateClientes(request, response) {
	const id = request.params.id;

	try {
		console.log("iniciando conexão");

		if (id && Number(id)) {
			const atualizadoCliente = request.body;
			const resultado = await updateClientebyId(
				id,
				atualizadoCliente.nome,
				atualizadoCliente.cpf,
				atualizadoCliente.email,
				atualizadoCliente.senha,
				atualizadoCliente.genero,
				atualizadoCliente.telefone,
				atualizadoCliente.dataCadastro,
				atualizadoCliente.dataNascimento
			);
			response.status(204);
			response.send("ok");
		} else {
			response.status(422);
			response.send("Id inválido");
		}
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

async function deleteCliente(request, response) {
	const id = request.params.id;

	try {
		console.log("iniciando conexão");
		if (id && Number(id)) {
			const resultado = await deleteClientebyId(id);
			response.send(`cliente excluido com sucesso, ID: ${id}`);
		} else {
			response.status(422);
			response.send("Id inválido");
		}
	} catch (err) {
		response.status(500);
		response.send("erro: " + err);
	}
}

module.exports = {
	findClientes,
	findClienteById,
	createCliente,
	checkCliente,
	updateClientes,
	deleteCliente,
};
