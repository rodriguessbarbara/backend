"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("enderecos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			lagradouro: {
				type: Sequelize.STRING,
			},
			enderecoResidencial: {
				type: Sequelize.STRING,
			},
			tipoResidencia: {
				type: Sequelize.ENUM("Casa", "Apartamento", "Comercial"),
			},
			num: {
				type: Sequelize.STRING,
			},
			CEP: {
				type: Sequelize.STRING,
			},
			bairro: {
				type: Sequelize.STRING,
			},
			cidade: {
				type: Sequelize.STRING,
			},
			estado: {
				type: Sequelize.STRING,
			},
			pais: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("enderecos");
	},
};
