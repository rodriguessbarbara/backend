"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class LivroPedido extends Model {
		static associate(models) {
			LivroPedido.belongsTo(models.Livro, {
				foreignKey: "livro_id",
				onDelete: "CASCADE",
			});
			LivroPedido.belongsTo(models.Pedido, {
				foreignKey: "pedido_id",
				onDelete: "CASCADE",
			});
		}
	}
	LivroPedido.init(
		{
			livro_id: DataTypes.BIGINT,
			pedido_id: DataTypes.BIGINT,
		},
		{
			sequelize,
			modelName: "LivroPedido",
			tableName: "livros_pedidos",
		}
	);
	return LivroPedido;
};
