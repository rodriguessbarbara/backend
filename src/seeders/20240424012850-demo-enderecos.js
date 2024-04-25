"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("enderecos", [
			{
				lagradouro: "avenida",
				enderecoResidencial: "japao",
				tipoResidencia: "Casa",
				num: "100",
				CEP: "09876500",
				bairro: "Centro",
				cidade: "Mogi das Cruzes",
				estado: "Sao Paulo",
				pais: "Brasil",
				cliente_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("enderecos", null, {});
	},
};
