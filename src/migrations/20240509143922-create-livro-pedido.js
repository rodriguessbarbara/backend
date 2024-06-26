"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("livros_pedidos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			livro_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "livros", key: "id" },
				onDelete: "CASCADE",
			},
			pedido_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "pedidos", key: "id" },
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
		await queryInterface.dropTable("livros_pedidos");
	},
};
