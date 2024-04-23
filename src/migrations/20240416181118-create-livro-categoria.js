"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("livros_categorias", {
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
			},
			categoria_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "categorias", key: "id" },
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
		await queryInterface.dropTable("livros_categorias");
	},
};
