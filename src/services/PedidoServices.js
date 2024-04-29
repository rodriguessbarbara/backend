const Services = require("./Services");
const data = require("../models/index");

class PedidoServices extends Services {
	constructor() {
		super("Pedido");
	}

	async confirmarPedido(vendaId, statusAtual) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			if (statusAtual === "confirmado") {
				pedido.status = "PAGAMENTO REALIZADO";
			} else if (statusAtual === "recusado") {
				pedido.status = "PAGAMENTO RECUSADO";
			} else if (statusAtual === "cancelado") {
				pedido.status = "PEDIDO CANCELADO";
			}
			await pedido.save();
			return pedido.status;
		} catch (error) {
			throw new Error("Erro ao confirmar pedido: " + error.message);
		}
	}

	async despacharProdutos(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "EM TRÂNSITO";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao despachar produtos: " + error.message);
		}
	}

	async confirmarEntrega(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "ENTREGUE";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao confirmar entrega: " + error.message);
		}
	}

	async autorizarTroca(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "EM TROCA") {
				throw new Error("Pedido não encontrado ou não está em troca");
			}
			pedido.status = "TROCA AUTORIZADA";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao autorizar troca: " + error.message);
		}
	}

	async solicitarTroca(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "ENTREGUE") {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "EM TROCA";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao solicitar troca: " + error.message);
		}
	}

	async confirmarRecebimento(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "TROCA AUTORIZADA") {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "TROCA FINALIZADA";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao solicitar troca: " + error.message);
		}
	}
}

module.exports = PedidoServices;
