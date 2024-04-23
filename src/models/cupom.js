"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cupom extends Model {
		static associate(models) {
			Cupom.belongsToMany(models.Cliente, {
				through: "cupom_cliente",
				foreignKey: "cliente_id",
			});

			Cupom.belongsToMany(models.Pedido, {
				through: "cupom_pedido",
				foreignKey: "pedido_id",
			});
		}
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
			tableName: "CUPONS",
		}
	);
	return Cupom;
};
