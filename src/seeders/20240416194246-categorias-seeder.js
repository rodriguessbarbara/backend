"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"categorias",
			[
				{ nome: "Romance", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Suspense", createdAt: new Date(), updatedAt: new Date() },
				{
					nome: "Ficcao Cientifica",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{ nome: "Ficcao", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Terror", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Educacao", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Aventura", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Fantasia", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Biografias", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Politica", createdAt: new Date(), updatedAt: new Date() },
				{ nome: "Policial", createdAt: new Date(), updatedAt: new Date() },
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("categorias", null, {});
	},
};
