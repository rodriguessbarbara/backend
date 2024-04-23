"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("clientes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nome: {
				type: Sequelize.STRING,
			},
			cpf: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			senha: {
				type: Sequelize.STRING,
			},
			genero: {
				type: Sequelize.ENUM("FEMININO", "MASCULINO", "NÃO-BINARIO", "OUTRO"),
			},
			telefone: {
				type: Sequelize.STRING,
			},
			dataNascimento: {
				type: Sequelize.DATEONLY,
			},
			ativo: {
				type: Sequelize.BOOLEAN,
			},
			role: {
				type: Sequelize.STRING,
			},
			endereco_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "enderecos", key: "id" },
			},
			cartao_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "cartoes", key: "id" },
			},
			pedido_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "pedidos", key: "id" },
			},
			cupom_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "cupons", key: "id" },
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
		await queryInterface.dropTable("Clientes");
	},
};
