const { Op } = require("sequelize");
const Services = require("./Services");
const data = require("../models/index");

class GraficoServices extends Services {
	async getConsultaGrafico(startDate, endDate) {
		try {
			const pedidos = await data.Pedido.findAll({
				where: {
					createdAt: {
						[Op.between]: [startDate, endDate],
					},
				},
				include: [
					{
						model: data.LivroPedido,
						attributes: ["livro_id"],
						include: [
							{
								model: data.Livro,
								attributes: [
									"id",
									"titulo",
									"precificacao",
									"quantidade",
									"ativo",
								],
							},
						],
					},
				],
			});
			return pedidos;
		} catch (err) {
			throw new Error(
				`Erro ao buscar os pedidos a partir das datas fornecidas: ${err.message}`
			);
		}
	}
}

module.exports = GraficoServices;
