"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class LivroCategoria extends Model {
		static associate(models) {
			LivroCategoria.belongsTo(models.Livro, {
				foreignKey: "livro_id",
				onDelete: "CASCADE",
			});
			LivroCategoria.belongsTo(models.Categoria, {
				foreignKey: "categoria_id",
				onDelete: "CASCADE",
			});
		}
	}
	LivroCategoria.init(
		{
			livro_id: DataTypes.BIGINT,
			categoria_id: DataTypes.BIGINT,
		},

		{
			sequelize,
			modelName: "LivroCategoria",
			tableName: "livros_categorias",
		}
	);
	return LivroCategoria;
};
