const { Op } = require("sequelize");
const Services = require("./Services");
const data = require("../models/index");

class LivroServices extends Services {
	constructor() {
		super("Livro");
	}

	async createLivro(novoLivro) {
		try {
			const livroCriado = await data.Livro.create(novoLivro);
			console.log(novoLivro);
			if (novoLivro.categorias && novoLivro.categorias.length > 0) {
				await Promise.all(
					novoLivro.categorias.map(async (categoria_id) => {
						await data.LivroCategoria.create({
							livro_id: livroCriado.id,
							categoria_id: categoria_id,
						});
					})
				);
			}
			return livroCriado;
		} catch (err) {
			throw new Error(`Erro ao criar o livro: ${err.message}`);
		}
	}

	async getByNome(nome) {
		try {
			const livro = await data.Livro.findAll({
				where: {
					titulo: {
						[Op.startsWith]: `%${nome}%`,
					},
				},
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

			const livrosAtualizados = await Promise.all(
				livros.map(async (livro) => {
					if (livro.quantidade <= 0 && livro.ativo) {
						await livroServices.updateRegistro({ ativo: false }, livro.id);
						livro.ativo = false;
					}
					return livro;
				})
			);

			return livrosAtualizados;
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

	async getFiltros() {
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

			const filtros = [
				{
					id: "editora",
					name: "Editora",
					options: [],
				},
				{
					id: "LivroCategoria",
					name: "Categoria",
					options: [],
				},
				{
					id: "autor",
					name: "Autor",
					options: [],
				},
				{
					id: "edicao",
					name: "Edicao",
					options: [],
				},
				{
					id: "ano",
					name: "Ano",
					options: [],
				},
				{
					id: "precificacao",
					name: "Preço",
					options: [],
				},
				{
					id: "numeroPaginas",
					name: "Número de Páginas",
					options: [],
				},
			];

			livros.forEach((livro) => {
				if (
					livro.editora &&
					!filtros[0].options.some((option) => option.value === livro.editora)
				) {
					filtros[0].options.push({
						value: livro.editora,
						label: livro.editora,
						checked: false,
					});
				}

				livro.LivroCategoria.forEach((categoria) => {
					if (
						!filtros[1].options.some(
							(option) => option.value === categoria.Categorium.nome
						)
					) {
						filtros[1].options.push({
							value: categoria.Categorium.nome,
							label: categoria.Categorium.nome,
							checked: false,
						});
					}
				});

				if (
					livro.autor &&
					!filtros[2].options.some((option) => option.value === livro.autor)
				) {
					filtros[2].options.push({
						value: livro.autor,
						label: livro.autor,
						checked: false,
					});
				}

				if (
					livro.edicao &&
					!filtros[3].options.some((option) => option.value === livro.edicao)
				) {
					filtros[3].options.push({
						value: livro.edicao,
						label: livro.edicao,
						checked: false,
					});
				}

				if (
					livro.ano &&
					!filtros[4].options.some((option) => option.value === livro.ano)
				) {
					filtros[4].options.push({
						value: livro.ano,
						label: livro.ano,
						checked: false,
					});
				}

				if (
					livro.precificacao &&
					!filtros[5].options.some(
						(option) => option.value === livro.precificacao
					)
				) {
					filtros[5].options.push({
						value: livro.precificacao,
						label: livro.precificacao,
						checked: false,
					});
				}

				if (
					livro.numeroPaginas &&
					!filtros[6].options.some(
						(option) => option.value === livro.numeroPaginas
					)
				) {
					filtros[6].options.push({
						value: livro.numeroPaginas,
						label: livro.numeroPaginas,
						checked: false,
					});
				}
			});

			return filtros;
		} catch (err) {
			throw new Error(`Erro ao obter os filtros dos livros: ${err.message}`);
		}
	}
}

const livroServices = new LivroServices();

module.exports = LivroServices;
