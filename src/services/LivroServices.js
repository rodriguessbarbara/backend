const { Op } = require("sequelize");
const Services = require("./Services");
const data = require("../models/index");

class LivroServices extends Services {
	constructor() {
		super("Livro");
	}

	async getByNome(nome) {
		try {
			const livro = await data.Livro.findAll({
				where: {
					titulo: {
						[Op.startsWith]: `%${nome}%`,
					},
				},
			});
			return livro;
		} catch (err) {
			throw new Error(`Erro ao buscar o livro pelo nome: ${err.message}`);
		}
	}

	async getTodosLivros() {
		try {
			const livros = await data.Livro.findAll({
				include: [
					{
						model: data.LivroCategoria,
						attributes: ["categoria_id"],
						include: [
							{
								model: data.Categoria,
								attributes: ["nome"],
							},
						],
					},
				],
			});

			return livros;
		} catch (err) {
			throw new Error(`Erro ao buscar livros: ${err.message}`);
		}
	}

	async deleteLivro(id) {
		try {
			const livroExistente = await data.Livro.findByPk(id);
			if (!livroExistente) {
				throw new Error(`Livro com id ${id} não encontrado.`);
			}

			await data.LivroCategoria.destroy({ where: { livro_id: id } });
			await data.Livro.destroy({ where: { id } });

			return true;
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

module.exports = LivroServices;
