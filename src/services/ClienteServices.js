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

			if (resultado && resultado.ativo) {
				return resultado.id;
			} else if (!resultado) {
				throw new Error("Usuário e/ou senha incorreto");
			} else {
				throw new Error("Sua conta está inativa");
			}
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = ClienteServices;
