"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cliente extends Model {
		static associate(models) {
			Cliente.hasMany(models.Endereco, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
			Cliente.hasMany(models.Cartao, {
				foreignKey: "cliente_id",
				onDelete: "CASCADE",
			});
			Cliente.hasMany(models.Pedido, { foreignKey: "cliente_id" });
		}
	}
	Cliente.init(
		{
			nome: DataTypes.STRING,
			cpf: DataTypes.STRING,
			email: DataTypes.STRING,
			senha: DataTypes.STRING,
			genero: {
				type: DataTypes.ENUM("FEMININO", "MASCULINO", "NÃO-BINARIO", "OUTRO"),
			},
			telefone: DataTypes.STRING,
			dataNascimento: DataTypes.DATE,
			ativo: DataTypes.BOOLEAN,
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Cliente",
			tableName: "clientes",
			defaultScope: {
				attributes: { exclude: ["senha"] },
			},
		}
	);
	return Cliente;
};
