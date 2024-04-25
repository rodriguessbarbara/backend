"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cupons", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nome: {
				type: Sequelize.STRING,
			},
			valor: {
				type: Sequelize.FLOAT,
			},
			tipo: {
				type: Sequelize.STRING,
			},
			ativo: {
				type: Sequelize.BOOLEAN,
			},
			pedido_id: {
				allowNull: true,
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
		await queryInterface.dropTable("cupons");
	},
};
