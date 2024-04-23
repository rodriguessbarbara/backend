const express = require("express");
const rotaClientes = require("./cliente-router");
const rotaLivros = require("./livro-router");

module.exports = (app) => {
	app.use(express.json(), rotaClientes);
	app.use(express.json(), rotaLivros);
};
