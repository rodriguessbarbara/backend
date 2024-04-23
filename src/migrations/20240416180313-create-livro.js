"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("livros", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			imageSrc: {
				type: Sequelize.STRING,
			},
			capaAlternativa: {
				type: Sequelize.STRING,
			},
			autor: {
				type: Sequelize.STRING,
			},
			ano: {
				type: Sequelize.STRING,
			},
			titulo: {
				type: Sequelize.STRING,
			},
			editora: {
				type: Sequelize.STRING,
			},
			edicao: {
				type: Sequelize.STRING,
			},
			ISBN: {
				type: Sequelize.STRING,
			},
			numeroPaginas: {
				type: Sequelize.INTEGER,
			},
			sinopse: {
				type: Sequelize.STRING,
			},
			dimensoes: {
				type: Sequelize.STRING,
			},
			precificacao: {
				type: Sequelize.INTEGER,
			},
			quantidade: {
				type: Sequelize.INTEGER,
			},
			ativo: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable("Livros");
	},
};
