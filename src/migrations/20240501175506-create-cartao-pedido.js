"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cartoes_pedidos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cartao_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "cartoes", key: "id" },
				onDelete: "CASCADE",
			},
			pedido_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "pedidos", key: "id" },
				onDelete: "CASCADE",
			},
			valor: {
				allowNull: false,
				type: Sequelize.FLOAT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("cartoes_pedidos");
	},
};
