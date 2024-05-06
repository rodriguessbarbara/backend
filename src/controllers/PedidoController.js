const Controller = require("./Controller");
const PedidoServices = require("../services/PedidoServices");

const pedidoServices = new PedidoServices();

class PedidoController extends Controller {
	constructor() {
		super(pedidoServices);
	}

	async criarPedido(request, response) {
		try {
			const novoPedido = request.body;
			const pedidoCriado = await pedidoServices.createPedido(novoPedido);
			response.status(201).json(pedidoCriado);
		} catch (error) {
			response.status(400).json(error.message);
		}
	}

	async findPedidosById(request, response) {
		try {
			const id = request.params.id;
			const pedidos = await pedidoServices.getPedidosById(id);
			return response.status(201).json(pedidos);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	async findTodosPedidos(request, response) {
		try {
			const pedidos = await pedidoServices.getTodosPedidos();
			return response.status(200).json(pedidos);
		} catch (err) {
			return response.status(500).json(err.message);
		}
	}

	async confirmarPedido(request, response) {
		try {
			const vendaId = request.params.id;
			const statusAtual = request.body;

			const pedido = await pedidoServices.confirmarPedido(
				vendaId,
				statusAtual.status
			);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}

	async despacharProdutos(request, response) {
		try {
			const vendaId = request.params.id;
			const pedido = await pedidoServices.despacharProdutos(vendaId);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}

	async confirmarEntrega(request, response) {
		try {
			const vendaId = request.params.id;
			const pedido = await pedidoServices.confirmarEntrega(vendaId);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}

	async autorizarTroca(request, response) {
		try {
			const vendaId = request.params.id;
			const pedido = await pedidoServices.autorizarTroca(vendaId);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}

	async solicitarTroca(request, response) {
		try {
			const vendaId = request.params.id;
			const pedido = await pedidoServices.solicitarTroca(vendaId);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}

	async confirmarRecebimento(request, response) {
		try {
			const vendaId = request.params.id;
			const cupomId = request.body.id;

			const pedido = await pedidoServices.confirmarRecebimento(
				vendaId,
				cupomId
			);
			response.status(200).json(pedido);
		} catch (error) {
			response.status(500).json(error.message);
		}
	}
}

module.exports = PedidoController;
