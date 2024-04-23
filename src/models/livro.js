"use strict";
const { Model } = require("sequelize");
const Categoria = require("./categoria");

module.exports = (sequelize, DataTypes) => {
	class Livro extends Model {
		static associate(models) {
			Livro.belongsToMany(models.Categoria, {
				through: models.LivroCategoria,
				foreignKey: "livro_id",
			});
			Livro.hasMany(models.LivroCategoria, { foreignKey: "livro_id" });
		}
	}
	Livro.init(
		{
			imageSrc: DataTypes.STRING,
			capaAlternativa: DataTypes.STRING,
			autor: DataTypes.STRING,
			ano: DataTypes.STRING,
			titulo: DataTypes.STRING,
			editora: DataTypes.STRING,
			edicao: DataTypes.STRING,
			ISBN: DataTypes.STRING,
			numeroPaginas: DataTypes.INTEGER,
			sinopse: DataTypes.STRING,
			dimensoes: DataTypes.STRING,
			precificacao: DataTypes.INTEGER,
			quantidade: DataTypes.INTEGER,
			ativo: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Livro",
			tableName: "livros",
		}
	);
	return Livro;
};
