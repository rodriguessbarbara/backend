"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cupom extends Model {
		static associate(models) {}
	}
	Cupom.init(
		{
			nome: DataTypes.STRING,
			valor: DataTypes.NUMBER,
			tipo: DataTypes.STRING,
			ativo: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Cupom",
			tableName: "cupons",
		}
	);
	return Cupom;
};
