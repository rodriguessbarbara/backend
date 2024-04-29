"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("pedidos", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			tituloLivro: {
				type: Sequelize.STRING,
			},
			formaPagamento: {
				type: Sequelize.STRING,
			},
			valor: {
				type: Sequelize.FLOAT,
			},
			quantidade: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.ENUM(
					"EM PROCESSAMENTO",
					"PAGAMENTO REALIZADO",
					"PAGAMENTO RECUSADO",
					"PEDIDO CANCELADO",
					"EM TRANSPORTE",
					"ENTREGUE",
					"EM TROCA",
					"TROCA AUTORIZADA",
					"TROCA FINALIZADA"
				),
			},
			cliente_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "clientes", key: "id" },
				onDelete: "CASCADE",
			},
			cartao_id: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "cartoes", key: "id" },
			},
			cupom_id: {
				allowNull: true,
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
		await queryInterface.dropTable("pedidos");
	},
};
