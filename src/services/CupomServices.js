const Services = require("./Services");
const data = require("../models/index");

class CupomServices extends Services {
	constructor() {
		super("Cupom");
	}

	async verificaCupom(nome) {
		try {
			const resultado = await data.Cupom.findOne({
				where: { nome: nome },
			});

			if (resultado) {
				if (resultado.ativo) {
					return resultado;
				} else {
					throw new Error("Código não ativo");
				}
			} else {
				throw new Error("Código inválido");
			}
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = CupomServices;
