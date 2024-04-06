const express = require("express");
const cors = require("cors");
const app = express();

const port = 8000;
const rotaCliente = require("./router/cliente-router");
const { cliente } = require("./model/cliente-model");

app.use(cors());
app.use(express.json());
app.use("/clientes", rotaCliente);

async function conectarCliente() {
	try {
		await cliente.connect();
		console.log("Cliente PostgreSQL conectado com sucesso!");
	} catch (error) {
		console.error("Erro ao conectar o cliente PostgreSQL:", error.message);
	}
}

async function desconectarCliente() {
	try {
		await cliente.end();
		console.log("Cliente PostgreSQL desconectado com sucesso!");
	} catch (error) {
		console.error("Erro ao desconectar o cliente PostgreSQL:", error.message);
	}
}

app.listen(port, () => {
	console.log(`escutando a porta ${port}`);
	conectarCliente();
});

process.on("SIGINT", async () => {
	await desconectarCliente();
	process.exit(0);
});
