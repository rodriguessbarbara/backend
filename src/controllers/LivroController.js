const Controller = require("./Controller");
const LivroServices = require("../services/LivroServices");
const unidecode = require("unidecode");

const livroServices = new LivroServices();

class LivroController extends Controller {
	constructor() {
		super(livroServices);
	}

	async criarLivro(request, response) {
		try {
			const novoLivro = request.body;
			const livroCriado = await livroServices.createLivro(novoLivro);
			response.status(201).json(livroCriado);
		} catch (error) {
			response.status(400).json(error.message);
		}
	}

	async findLivrosByNome(request, response) {
		try {
			const nome = unidecode(request.params.nome.toLowerCase());
			const livro = await livroServices.getByNome(nome);
			if (!livro.length) {
				return response.status(404).send("Livro não encontrado.");
			}
			return response.status(201).json(livro);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	async findTodosLivros(request, response) {
		try {
			const livros = await livroServices.getTodosLivros();
			if (!livros.length) {
				return response.status(404).send("Nenhum livro encontrado.");
			}
			return response.status(200).json(livros);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	async deleteLivro(request, response) {
		const id = request.params.id;
		try {
			if (id && Number(id)) {
				const result = await livroServices.deleteLivro(id);
				return response
					.status(200)
					.json({ mensagem: `Livro com id ${id} deletado.` });
			} else {
				return response.status(422).json({ mensagem: "Id inválido." });
			}
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}
}

module.exports = LivroController;
