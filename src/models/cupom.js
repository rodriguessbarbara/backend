"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cupom extends Model {
		static associate(models) {
			Cupom.belongsTo(models.Cliente, {
				through: "cupom_cliente",
				foreignKey: "cliente_id",
			});
			Cupom.belongsTo(models.Pedido, {
				through: "cupom_pedido",
				foreignKey: "pedido_id",
			});
		}
	}
	Cupom.init(
		{
			nome: DataTypes.STRING,
			valor: DataTypes.NUMBER,
			tipo: DataTypes.ENUM("PROMOCIONAL", "TROCA", "DEVOLUÇÃO"),
			ativo: DataTypes.BOOLEAN,
			cliente_id: DataTypes.INTEGER,
			pedido_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Cupom",
			tableName: "cupons",
		}
	);
	return Cupom;
};
