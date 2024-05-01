"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cartao_Pedido extends Model {
		static associate(models) {
			Cartao_Pedido.belongsTo(models.Pedido, {
				foreignKey: "pedido_id",
				onDelete: "CASCADE",
			});
			Cartao_Pedido.belongsTo(models.Cartao, {
				foreignKey: "cartao_id",
				onDelete: "CASCADE",
			});
		}
	}
	Cartao_Pedido.init(
		{
			cartao_id: DataTypes.BIGINT,
			pedido_id: DataTypes.BIGINT,
		},
		{
			sequelize,
			modelName: "Cartao_Pedido",
			tableName: "cartoes_pedidos",
		}
	);
	return Cartao_Pedido;
};
