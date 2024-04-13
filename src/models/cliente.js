"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cliente extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Cliente.init(
		{
			nome: DataTypes.STRING,
			cpf: DataTypes.STRING,
			email: DataTypes.STRING,
			senha: DataTypes.STRING,
			genero: {
				type: DataTypes.ENUM("FEMININO", "MASCULINO", "NÃO-BINARIO", "OUTRO"),
			},
			telefone: DataTypes.STRING,
			dataNascimento: DataTypes.DATE,
			ativo: DataTypes.BOOLEAN,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Cliente",
			tableName: "clientes",
		}
	);
	return Cliente;
};
