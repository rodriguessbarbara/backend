"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Pedido extends Model {
		static associate(models) {
			Pedido.belongsTo(models.Cliente, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
			// Pedido.hasOne(models.Cupom, { foreignKey: "cupom_id" });
			// Pedido.belongsTo(models.Cartao, { foreignKey: "cartao_id" });
			Pedido.hasMany(models.Cartao_Pedido, {
				foreignKey: "pedido_id",
				onDelete: "CASCADE",
			});
			Pedido.hasMany(models.LivroPedido, {
				foreignKey: "pedido_id",
				onDelete: "CASCADE",
			});
		}
	}
	Pedido.init(
		{
			formaPagamento: DataTypes.STRING,
			valor: DataTypes.FLOAT,
			quantidade: DataTypes.STRING,
			status: {
				type: DataTypes.ENUM(
					"EM PROCESSAMENTO",
					"PAGAMENTO REALIZADO",
					"PAGAMENTO RECUSADO",
					"PEDIDO CANCELADO",
					"EM TRANSPORTE",
					"ENTREGUE",
					"EM TROCA",
					"TROCA AUTORIZADA",
					"TROCA RECUSADA",
					"TROCA FINALIZADA",
					"ITENS ENVIADOS",
					"AGUARDANDO CANCELAMENTO"
				),
			},
			cliente_id: DataTypes.INTEGER,
			// cupom_id: DataTypes.INTEGER,
			// cartao_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Pedido",
			tableName: "pedidos",
		}
	);
	return Pedido;
};
