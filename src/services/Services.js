const data = require("../models/index");

class Services {
	constructor(model) {
		this.model = model;
	}

	async getFindAll() {
		return data[this.model].findAll();
	}

	async getByPk(id) {
		return data[this.model].findByPk(id);
	}

	async createRegistro(novoRegistro) {
		return data[this.model].create(novoRegistro);
	}

	async updateRegistro(dadosAtualizados, id) {
		const listaAtualizados = data[this.model].update(dadosAtualizados, {
			where: { id: id },
		});
		if (listaAtualizados[0] === 0) {
			return false;
		}
		return true;
	}

	async deleteRegistro(id) {
		return data[this.model].destroy({ where: { id: id } });
	}
}

module.exports = Services;
