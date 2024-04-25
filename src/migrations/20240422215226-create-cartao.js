"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cartoes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			bandeira: {
				type: Sequelize.STRING,
			},
			numeroCartao: {
				type: Sequelize.STRING,
			},
			final: {
				type: Sequelize.STRING,
			},
			nome: {
				type: Sequelize.STRING,
			},
			cvv: {
				type: Sequelize.STRING,
			},
			preferencial: {
				type: Sequelize.BOOLEAN,
			},
			cliente_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "clientes", key: "id" },
				onDelete: "CASCADE",
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
		await queryInterface.dropTable("cartoes");
	},
};
