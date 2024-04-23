const Services = require("./Services");
const data = require("../models/index");

class CupomServices extends Services {
	constructor() {
		super("Cupom");
	}

	async verificaCupom(codigo) {
		try {
			const resultado = await data.Cupom.findOne({
				where: { codigo: codigo },
			});

			if (resultado) {
				if (resultado.ativo) {
					return resultado.id;
				}
				else {
					throw new Error("Código não ativo");
				}
			}
			else {
				throw new Error("Código inválido");
			}
		}
		catch (error) {
			throw new Error("Erro ao verificar o cupom: " + err);
		}
	}
}

module.exports = CupomServices;