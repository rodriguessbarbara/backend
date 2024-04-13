const express = require("express");
const rotaClientes = require("./cliente-router");

module.exports = (app) => {
	app.use(express.json(), rotaClientes);
};
