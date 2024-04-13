const Services = require("./Services");
const data = require("../models/index");

class ClienteServices extends Services {
	constructor() {
		super("Cliente");
	}

	async verificaCliente(email, senha) {
		try {
			const resultado = await data.Cliente.findOne({
				where: {
					email: email,
					senha: senha,
				},
			});

			if (resultado) {
				return resultado.id;
			} else {
				throw new Error("Usuário e/ou senha incorreto");
			}
		} catch (err) {
			throw new Error("Erro ao verificar o cliente: " + err);
		}
	}
}

module.exports = ClienteServices;
