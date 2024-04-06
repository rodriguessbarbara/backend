const { cliente } = require("../model/cliente-model");

async function getClientes() {
	try {
		const query = "SELECT * FROM Clientes";
		const result = await cliente.query(query);

		return result.rows;
	} catch (error) {
		throw new Error("Erro ao buscar clientes" + error.message);
	}
}

async function getClientebyId(id) {
	try {
		const query = "SELECT * FROM Clientes WHERE id = $1";
		const values = id;
		const result = await cliente.query(query, [values]);

		return result.rows;
	} catch (error) {
		throw new Error("Erro ao buscar o cliente por ID: " + error.message);
	}
}

async function postCliente(
	nome,
	cpf,
	email,
	senha,
	genero,
	telefone,
	dataCadastro,
	dataNascimento
) {
	try {
		const query = `
            INSERT INTO Clientes ("nome", "cpf", "email", "senha", "genero", "telefone", "datacadastro", "datanascimento") 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;
		const values = [
			nome,
			cpf,
			email,
			senha,
			genero,
			telefone,
			dataCadastro,
			dataNascimento,
		];
		const result = await cliente.query(query, values);
		console.log("caiu aqui");
		return result.rows;
	} catch (error) {
		throw new Error("Erro ao inserir cliente: " + error.message);
	}
}

async function updateClientebyId(
	id,
	nome,
	cpf,
	email,
	senha,
	genero,
	telefone,
	dataCadastro,
	dataNascimento
) {
	try {
		const query = `
            UPDATE Clientes SET nome = $2, cpf = $3, email = $4, senha = $5, genero = $6, telefone = $7, dataCadastro = $8, dataNascimento = $9 WHERE id = $1
        `;
		const values = [
			id,
			nome,
			cpf,
			email,
			senha,
			genero,
			telefone,
			dataCadastro,
			dataNascimento,
		];
		const result = await cliente.query(query, values);

		return result.rows[0];
	} catch (error) {
		throw new Error("Erro ao atualizar cliente: " + error.message);
	}
}

async function deleteClientebyId(id) {
	try {
		const values = id;
		const query = "DELETE FROM Clientes WHERE id = $1";
		const result = await cliente.query(query, [values]);

		return result.rows[0];
	} catch (error) {
		throw new Error("Erro ao deletar cliente: " + error.message);
	}
}

module.exports = {
	getClientes,
	getClientebyId,
	postCliente,
	updateClientebyId,
	deleteClientebyId,
};
