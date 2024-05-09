"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("pedidos", [
			{
				formaPagamento: "Cartao",
				valor: 25.5,
				quantidade: "2",
				status: "EM PROCESSAMENTO",
				cliente_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				formaPagamento: "Cartao",
				valor: 52.5,
				quantidade: "2",
				status: "ENTREGUE",
				cliente_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("pedidos", null, {});
	},
};
