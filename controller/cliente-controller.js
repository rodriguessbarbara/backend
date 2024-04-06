const { cliente, Genero } = require("../model/cliente-model");
const {
	getClientes,
	getClientebyId,
	postCliente,
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
			response.send("cliente atualizado com sucesso");
			response.send(resultado);
		} else {
			response.status(422);
			response.send("Os campos são obrigatórios");
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
			response.send(`cliente atualizado com sucesso, ID: ${id}`);
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

async function deleteCliente(request, response) {
	const id = request.params.id;

	try {
		console.log("iniciando conexão");
		if (id && Number(id)) {
			const resultado = await deleteClientebyId(id);
			response.send(`cliente excluido com sucesso, ID: ${id}`);
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

module.exports = {
	findClientes,
	findClienteById,
	createCliente,
	updateClientes,
	deleteCliente,
};
