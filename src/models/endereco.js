"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Endereco extends Model {
		static associate(models) {
			Endereco.belongsTo(models.Cliente, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
		}
	}
	Endereco.init(
		{
			lagradouro: DataTypes.STRING,
			enderecoResidencial: DataTypes.STRING,
			tipoResidencia: DataTypes.ENUM("CASA", "APARTAMENTO", "COMERCIAL"),
			num: DataTypes.STRING,
			CEP: DataTypes.STRING,
			bairro: DataTypes.STRING,
			cidade: DataTypes.STRING,
			estado: DataTypes.STRING,
			pais: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Endereco",
			tableName: "enderecos",
		}
	);
	return Endereco;
};
