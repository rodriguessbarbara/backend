const Controller = require("./Controller");
const GraficoServices = require("../services/GraficoServices");

const graficoServices = new GraficoServices();

class GraficoController extends Controller {
	async findConsultaGrafico(request, response) {
		const data = request.body;

		try {
			const pedidosFiltrados = await graficoServices.getConsultaGrafico(
				data.startDate,
				data.endDate
			);
			if (!pedidosFiltrados.length) {
				return response
					.status(404)
					.send("Nenhum pedido encontrado no período informado.");
			}
			return response.status(200).json(pedidosFiltrados);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}
}

module.exports = GraficoController;
