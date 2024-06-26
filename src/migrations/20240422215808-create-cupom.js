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
				allowNull: false,
			},
			valor: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			tipo: {
				type: Sequelize.ENUM("PROMOCIONAL", "TROCA", "DEVOLUÇÃO"),
				allowNull: false,
			},
			ativo: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			pedido_id: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "pedidos", key: "id" },
			},
			cliente_id: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "clientes", key: "id" },
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
