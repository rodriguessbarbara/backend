"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"livros",
			[
				{
					imageSrc:
						"https://m.media-amazon.com/images/I/91ADwCpigxL._SL1500_.jpg",
					capaAlternativa:
						"https://pub-static.fotor.com/assets/community/images/65ddaf5a297c2fc05dd5d560/effect.jpg@1200w_1200h_1s.src",
					autor: "Carla Madeira",
					ano: "2022",
					titulo: "vespera",
					editora: "Record",
					edicao: "Portugues",
					ISBN: "978-1-12345-123-4",
					numeroPaginas: "280",
					sinopse:
						"Vedina, uma mulher destroçada por um casamento marcado pelo desamor, em um momento de descontrole abandona seu filho e, imediatamente arrependida, volta para o lugar onde o deixou e não encontra quaisquer vestígios de sua presença.",
					dimensoes: "15x2x20cm",
					precificacao: 24.91,
					quantidade: 10,
					ativo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageSrc:
						"https://m.media-amazon.com/images/I/719DYj1obyL._SL1500_.jpg",
					capaAlternativa:
						"https://pub-static.fotor.com/assets/community/images/65ddaf5a297c2fc05dd5d560/effect.jpg@1200w_1200h_1s.src",
					autor: "Isabel Allende",
					ano: "2022",
					titulo: "violeta",
					editora: "Bertrand",
					edicao: "Portugues",
					ISBN: "978-1-23456-789-0",
					numeroPaginas: "355",
					sinopse:
						"Violeta narra sua história em uma carta a pessoa que mais ama nessa vida, contando decepções e casos amorosos, momentos de pobreza e riqueza, terríveis perdas e imensas alegrias, sempre permeando grandes eventos da história.",
					dimensoes: "15x216x22cm",
					precificacao: 34.64,
					quantidade: 5,
					ativo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageSrc:
						"https://m.media-amazon.com/images/I/81J3umQXEBL._SL1500_.jpg",
					capaAlternativa:
						"https://pub-static.fotor.com/assets/community/images/65ddaf5a297c2fc05dd5d560/effect.jpg@1200w_1200h_1s.src",
					autor: "Ashley Audrain",
					ano: "2021",
					titulo: "o impulso",
					editora: "Paralela",
					edicao: "Portugues",
					ISBN: "978-8584391981",
					numeroPaginas: "328",
					sinopse:
						"Blythe Connor está decidida a ser a mãe perfeita, calorosa e acolhedora que nunca teve. Porém, no começo exaustivo da maternidade, ela descobre que sua filha Violet não se comporta como a maioria das crianças. Ou ela estaria imaginando? Seu marido Fox está certo de que é tudo fruto do cansaço e que essa é apenas uma fase difícil. Conforme seus medos são ignorados, Blythe começa a duvidar da própria sanidade. Mas quando nasce Sam, o segundo filho do casal, a experiência de Blythe é completamente diferente, e até Violet parece se dar bem com o irmãozinho. Bem no momento em que a vida parecia estar finalmente se ajustando, um grave acidente faz tudo sair dos trilhos, e Blythe é obrigada a confrontar a verdade.",
					dimensoes: "20.8x13.6x1.8cm",
					precificacao: 28.25,
					quantidade: 15,
					ativo: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);

		const livrosCategorias = [
			{
				livro_id: 15,
				categoria_id: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				livro_id: 15,
				categoria_id: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				livro_id: 16,
				categoria_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				livro_id: 16,
				categoria_id: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				livro_id: 17,
				categoria_id: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				livro_id: 17,
				categoria_id: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		];

		await queryInterface.bulkInsert("livros_categorias", livrosCategorias, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("livros_categorias", null, {});
		await queryInterface.bulkDelete("livros", null, {});
	},
};
