"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"clientes",
			[
				{
					nome: "admin",
					cpf: "00000000000",
					email: "admin@admin.com",
					senha: "admin",
					genero: "OUTRO",
					telefone: "11900000000",
					dataNascimento: "01/01/2001",
					ativo: true,
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("clientes", null, {});
	},
};
