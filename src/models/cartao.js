"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cartao extends Model {
		static associate(models) {
			Cartao.belongsTo(models.Cliente, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
			Cartao.belongsToMany(models.Pedido, {
				through: "cartao_pedido",
				foreignKey: "cartao_id",
			});
		}
	}
	Cartao.init(
		{
			bandeira: DataTypes.STRING,
			numeroCartao: DataTypes.STRING,
			final: DataTypes.STRING,
			nome: DataTypes.STRING,
			cvv: DataTypes.STRING,
			preferencial: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Cartao",
			tableName: "cartoes",
		}
	);
	return Cartao;
};
