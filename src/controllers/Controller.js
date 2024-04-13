class Controller {
	constructor(entidade) {
		this.entidade = entidade;
	}

	async findTodos(request, response) {
		try {
			const listaData = await this.entidade.getFindAll();
			return response.status(200).json(listaData);
		} catch (err) {
			response.status(500);
			response.send("erro: " + err);
		}
	}

	async findEntidadeById(request, response) {
		const id = request.params.id;

		try {
			if (id && Number(id)) {
				const resultado = await this.entidade.getByPk(id);
				return response.status(201).json(resultado);
			} else {
				response.status(422);
				response.send("Id inválido");
			}
		} catch (err) {
			response.status(500);
			response.send("erro: " + err);
		}
	}

	async createEntidade(request, response) {
		try {
			const novoDado = request.body;

			if (request.body) {
				const resultado = await this.entidade.createRegistro(novoDado);

				return response.status(201).json(resultado);
			} else {
				response.status(422);
				response.send("Todos os campos são obrigatórios");
			}
		} catch (err) {
			response.status(500);
			response.send("erro: " + err);
		}
	}

	async updateEntidade(request, response) {
		const id = request.params.id;
		const dadosAtualizados = request.body;

		try {
			if (id && Number(id)) {
				const resultado = await this.entidade.updateRegistro(
					dadosAtualizados,
					id
				);
				if (!resultado) {
					return response
						.status(400)
						.json({ mensagem: "registro não foi atualizado" });
				}
				return response
					.status(204)
					.json({ mensagem: "Atualizado com sucesso" });
			} else {
				response.status(422);
				response.send("Id inválido");
			}
		} catch (err) {
			response.status(500);
			response.send("erro: " + err);
		}
	}

	async deleteEntidade(request, response) {
		const id = request.params.id;
		try {
			if (id && Number(id)) {
				const resultado = await this.entidade.deleteRegistro(id);
				return response.status(200).json({ mensagem: `id ${id} deletado` });
			} else {
				response.status(422);
				response.send("Id inválido");
			}
		} catch (error) {
			return response.status(500).json(error.message);
		}
	}
}

module.exports = Controller;
