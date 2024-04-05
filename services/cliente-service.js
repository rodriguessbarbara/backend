const { cliente } = require("../model/cliente-model");

async function getClientebyId(id) {
	try {
		await cliente.connect();
		const query = "SELECT * FROM Clientes WHERE id = $1";
		const values = id;
		const result = await cliente.query(query, [values]);
		console.log(values);

		return result.rows; // Retorna o cliente encontrado
	} catch (error) {
		throw new Error("Erro ao buscar o cliente por ID: " + error.message);
	}
	cliente;
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
		await cliente.connect();
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

		return result.rows;
	} catch (error) {
		throw new Error("Erro ao inserir cliente: " + error.message);
	}
	cliente;
}

module.exports = {
	getClientebyId,
	postCliente,
};
