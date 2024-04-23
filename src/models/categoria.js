"use strict";
const { Model } = require("sequelize");
const Livro = require("./livro");

module.exports = (sequelize, DataTypes) => {
	class Categoria extends Model {
		static associate(models) {
			Categoria.belongsToMany(models.Livro, {
				through: models.LivroCategoria,
				foreignKey: "categoria_id",
				onDelete: "CASCADE",
			});
		}
	}
	Categoria.init(
		{
			nome: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Categoria",
			tableName: "categorias",
		}
	);
	return Categoria;
};
