const express = require("express");
const rotaLivros = require("./livro-router");
const rotaEnderecos = require("./endereco-router");
const rotaCartoes = require("./cartao-router");
const rotaCupom = require("./cupom-router");
const rotaPedidos = require("./pedido-router");
const rotaCategorias = require("./categoria-router");
const rotaGrafico = require("./grafico-router");
const rotaClientes = require("./cliente-router");

module.exports = (app) => {
	app.use(express.json(), rotaLivros);
	app.use(express.json(), rotaEnderecos);
	app.use(express.json(), rotaCartoes);
	app.use(express.json(), rotaPedidos);
	app.use(express.json(), rotaCupom);
	app.use(express.json(), rotaCategorias);
	app.use(express.json(), rotaGrafico);
	app.use(express.json(), rotaClientes);
};
