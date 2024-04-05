const Client = require("pg").Client;

const cliente = new Client({
	user: "postgres",
	password: "senha123",
	host: "127.0.0.1",
	port: 5432,
	database: "postgres",
});

const Genero = {
	MASCULINO: "MASCULINO",
	FEMININO: "FEMININO",
	NAO_BINARIO: "NAO_BINARIO",
	OUTRO: "OUTRO",
};

module.exports = {
	cliente,
	Genero,
};
