const { cliente, Genero } = require("../model/cliente-model");
const { getClientebyId, postCliente } = require("../services/cliente-service");

async function findClientes(request, response) {
	try {
		console.log("iniciando conexão");
		await cliente.connect();
		const resultado = await cliente.query("SELECT * FROM Clientes");

		console.table(resultado.rows);
	} catch (err) {
		response.send("erro eita" + err);
	} finally {
		await cliente.end();
		console.log("desconectado");
	}
}

async function findClienteById(request, response) {
	const id = request.params.id;

	try {
		console.log("iniciando conexão");
		const resultado = await getClientebyId(id);

		response.send(resultado);
	} catch (err) {
		response.send("erro eita" + err);
	} finally {
		await cliente.end();
		console.log("desconectado");
	}
}

async function createCliente(request, response) {
	try {
		console.log("iniciando conexão");

		const novoCliente = request.body;
		console.log(novoCliente);
		await postCliente(
			novoCliente.nome,
			novoCliente.cpf,
			novoCliente.email,
			novoCliente.senha,
			novoCliente.genero,
			novoCliente.telefone,
			novoCliente.dataCadastro,
			novoCliente.dataNascimento
		);

		console.table(novoCliente);
	} catch (err) {
		response.send("erro eita" + err);
	} finally {
		await cliente.end();
		console.log("desconectado");
	}
}

async function updateClientes(request, response) {
	try {
		console.log("iniciando conexão");
		await cliente.connect();
		await cliente.query(
			`UPDATE Clientes SET nome = ?, cpf = ?, email = ?, senha = ?, genero = ?, telefone = ? dataCadastro = ?, dataNascimento = ? WHERE id = ?`
		);

		const resultado = await cliente.query("SELECT * FROM Clientes");
		console.table(resultado.rows);
		response.send("deu certo requisição PATCH");
	} catch (err) {
		response.send("erro eita" + err);
	} finally {
		await cliente.end();
		console.log("desconectado");
	}
}

async function deleteCliente(request, response) {
	try {
		console.log("iniciando conexão");
		await cliente.connect();
		await cliente.query(`"DELETE FROM Clientes WHERE id = ?`);

		const resultado = await cliente.query("SELECT * FROM Clientes");
		console.table(resultado.rows);
		response.send("deu certo requisição DELETE");
	} catch (err) {
		response.send("erro eita" + err);
	} finally {
		await cliente.end();
		console.log("desconectado");
	}
}

module.exports = {
	findClientes,
	findClienteById,
	createCliente,
	updateClientes,
	deleteCliente,
};
