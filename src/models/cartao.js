"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cartao extends Model {
		static associate(models) {
			Cartao.belongsTo(models.Cliente, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
			// Cartao.hasMany(models.Pedido, {
			// 	foreignKey: "cartao_id",
			// });
			Cartao.hasMany(models.Cartao_Pedido, {
				foreignKey: "cartao_id",
				onDelete: "CASCADE",
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
			cliente_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Cartao",
			tableName: "cartoes",
		}
	);
	return Cartao;
};
