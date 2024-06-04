"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const pedidos = await queryInterface.bulkInsert(
			"pedidos",
			[
				{
					formaPagamento: "CARTAO",
					valor: 150.0,
					quantidade: "5, 6",
					status: "EM PROCESSAMENTO",
					cliente_id: 26,
					cupom_id: null,
					createdAt: new Date("2023-12-02T00:00:00Z"),
					updatedAt: new Date("2023-12-02T00:00:00Z"),
				},
				{
					formaPagamento: "CARTAO",
					valor: 108.5,
					quantidade: "6, 4",
					status: "EM PROCESSAMENTO",
					cliente_id: 26,
					cupom_id: null,
					createdAt: new Date("2024-02-10T00:00:00Z"),
					updatedAt: new Date("2024-02-10T00:00:00Z"),
				},
				{
					formaPagamento: "CARTAO",
					valor: 255.5,
					quantidade: "8, 6, 3, 5",
					status: "EM PROCESSAMENTO",
					cliente_id: 26,
					cupom_id: null,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					formaPagamento: "CARTAO",
					valor: 320.0,
					quantidade: "5, 2, 7, 4",
					status: "EM PROCESSAMENTO",
					cliente_id: 22,
					cupom_id: null,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					formaPagamento: "CARTAO",
					valor: 275.0,
					quantidade: "5, 2, 7",
					status: "EM PROCESSAMENTO",
					cliente_id: 22,
					cupom_id: null,
					createdAt: new Date("2024-03-21T00:00:00Z"),
					updatedAt: new Date("2024-03-21T00:00:00Z"),
				},
				{
					formaPagamento: "CARTAO",
					valor: 328.75,
					quantidade: "5, 3, 3",
					status: "EM PROCESSAMENTO",
					cliente_id: 26,
					cupom_id: null,
					createdAt: new Date("2024-04-05T00:00:00Z"),
					updatedAt: new Date("2024-04-05T00:00:00Z"),
				},
			],
			{ returning: true }
		);

		await queryInterface.bulkInsert(
			"cartoes_pedidos",
			[
				{
					cartao_id: 26,
					pedido_id: pedidos[0].id,
					valor: 75.0,
					createdAt: new Date("2023-12-02T00:00:00Z"),
					updatedAt: new Date("2023-12-02T00:00:00Z"),
				},
				{
					cartao_id: 27,
					pedido_id: pedidos[0].id,
					valor: 75.0,
					createdAt: new Date("2023-12-02T00:00:00Z"),
					updatedAt: new Date("2023-12-02T00:00:00Z"),
				},
				{
					cartao_id: 26,
					pedido_id: pedidos[1].id,
					valor: 108.5,
					createdAt: new Date("2024-02-10T00:00:00Z"),
					updatedAt: new Date("2024-02-10T00:00:00Z"),
				},
				{
					cartao_id: 27,
					pedido_id: pedidos[2].id,
					valor: 255.5,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					cartao_id: 5,
					pedido_id: pedidos[3].id,
					valor: 320.0,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					cartao_id: 5,
					pedido_id: pedidos[4].id,
					valor: 275.0,
					createdAt: new Date("2024-03-21T00:00:00Z"),
					updatedAt: new Date("2024-03-21T00:00:00Z"),
				},
				{
					cartao_id: 26,
					pedido_id: pedidos[5].id,
					valor: 328.75,
					createdAt: new Date("2024-04-05T00:00:00Z"),
					updatedAt: new Date("2024-04-05T00:00:00Z"),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"livros_pedidos",
			[
				{
					livro_id: 15,
					pedido_id: pedidos[0].id,
					createdAt: new Date("2023-12-02T00:00:00Z"),
					updatedAt: new Date("2023-12-02T00:00:00Z"),
				},
				{
					livro_id: 16,
					pedido_id: pedidos[0].id,
					createdAt: new Date("2023-12-02T00:00:00Z"),
					updatedAt: new Date("2023-12-02T00:00:00Z"),
				},
				{
					livro_id: 17,
					pedido_id: pedidos[1].id,
					createdAt: new Date("2024-02-10T00:00:00Z"),
					updatedAt: new Date("2024-02-10T00:00:00Z"),
				},
				{
					livro_id: 16,
					pedido_id: pedidos[1].id,
					createdAt: new Date("2024-02-10T00:00:00Z"),
					updatedAt: new Date("2024-02-10T00:00:00Z"),
				},
				{
					livro_id: 23,
					pedido_id: pedidos[2].id,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					livro_id: 24,
					pedido_id: pedidos[2].id,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					livro_id: 25,
					pedido_id: pedidos[2].id,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					livro_id: 16,
					pedido_id: pedidos[2].id,
					createdAt: new Date("2024-02-19T00:00:00Z"),
					updatedAt: new Date("2024-02-19T00:00:00Z"),
				},
				{
					livro_id: 15,
					pedido_id: pedidos[3].id,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					livro_id: 17,
					pedido_id: pedidos[3].id,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					livro_id: 24,
					pedido_id: pedidos[3].id,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					livro_id: 23,
					pedido_id: pedidos[3].id,
					createdAt: new Date("2024-03-01T00:00:00Z"),
					updatedAt: new Date("2024-03-01T00:00:00Z"),
				},
				{
					livro_id: 25,
					pedido_id: pedidos[4].id,
					createdAt: new Date("2024-03-21T00:00:00Z"),
					updatedAt: new Date("2024-03-21T00:00:00Z"),
				},
				{
					livro_id: 24,
					pedido_id: pedidos[4].id,
					createdAt: new Date("2024-03-21T00:00:00Z"),
					updatedAt: new Date("2024-03-21T00:00:00Z"),
				},
				{
					livro_id: 16,
					pedido_id: pedidos[4].id,
					createdAt: new Date("2024-03-21T00:00:00Z"),
					updatedAt: new Date("2024-03-21T00:00:00Z"),
				},
				{
					livro_id: 16,
					pedido_id: pedidos[5].id,
					createdAt: new Date("2024-04-05T00:00:00Z"),
					updatedAt: new Date("2024-04-05T00:00:00Z"),
				},
				{
					livro_id: 25,
					pedido_id: pedidos[5].id,
					createdAt: new Date("2024-04-05T00:00:00Z"),
					updatedAt: new Date("2024-04-05T00:00:00Z"),
				},
				{
					livro_id: 24,
					pedido_id: pedidos[5].id,
					createdAt: new Date("2024-04-05T00:00:00Z"),
					updatedAt: new Date("2024-04-05T00:00:00Z"),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("livros_pedidos", null, {});
		await queryInterface.bulkDelete("cartoes_pedidos", null, {});
		await queryInterface.bulkDelete("pedidos", null, {});
	},
};
