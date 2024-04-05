const express = require("express");
const app = express();
const port = 8000;
const rotaCliente = require("./router/cliente-router");

app.use(express.json());
app.use("/clientes", rotaCliente);

app.listen(port, () => {
	console.log(`escutando a porta ${port}`);
});
