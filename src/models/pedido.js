"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Pedido extends Model {
		static associate(models) {
			Pedido.belongsTo(models.Cliente, { foreignKey: "cliente_id" });
			Pedido.hasMany(models.Cartao, { foreignKey: "pedido_id" });
			Pedido.hasOne(models.Cupom, { foreignKey: "cupom_id" });
		}
	}
	Pedido.init(
		{
			tituloLivro: DataTypes.STRING,
			formaPagamento: DataTypes.STRING,
			valor: DataTypes.FLOAT,
			quantidade: DataTypes.INTEGER,
			status: {
				type: DataTypes.ENUM(
					"EM PROCESSAMENTO",
					"PAGAMENTO REALIZADO",
					"PAGAMENTO RECUSADO",
					"PEDIDO CANCELADO",
					"EM TRANSPORTE",
					"ENTREGUE",
					"EM TROCA",
					"TROCA AUTORIZADA"
				),
			},
		},
		{
			sequelize,
			modelName: "Pedido",
			tableName: "pedidos",
		}
	);
	return Pedido;
};
