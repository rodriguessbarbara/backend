const Services = require("./Services");
const data = require("../models/index");

const CupomServices = require("../services/CupomServices");
const cupomServices = new CupomServices();

class PedidoServices extends Services {
	constructor() {
		super("Pedido");
	}

	static pedidoTroca = [];

	async createPedido(novoPedido) {
		try {
			const pedidoCriado = await data.Pedido.create(novoPedido);
			if (novoPedido.cartoes && novoPedido.cartoes.length > 0) {
				await Promise.all(
					novoPedido.cartoes.map(async (cartao_id) => {
						await data.Cartao_Pedido.create({
							pedido_id: pedidoCriado.id,
							cartao_id: cartao_id,
						});
					})
				);
			}
			if (novoPedido.tituloLivros && novoPedido.tituloLivros.length > 0) {
				await Promise.all(
					novoPedido.tituloLivros.map(async (livro_id) => {
						await data.LivroPedido.create({
							pedido_id: pedidoCriado.id,
							livro_id: livro_id,
						});
					})
				);
			}
			return pedidoCriado;
		} catch (err) {
			throw new Error(`Erro ao criar o pedido: ${err.message}`);
		}
	}

	async getPedidosById(id) {
		try {
			const pedidos = await data.Pedido.findOne({
				where: {
					id: id,
				},
				include: [
					{
						model: data.Cartao_Pedido,
						attributes: ["cartao_id"],
						include: [
							{
								model: data.Cartao,
								attributes: [
									"id",
									"bandeira",
									"numeroCartao",
									"final",
									"nome",
									"cvv",
									"preferencial",
								],
							},
						],
					},
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
			throw new Error(`Erro ao buscar pedidos: ${err.message}`);
		}
	}

	async getTodosPedidos() {
		try {
			const pedidos = await data.Pedido.findAll({
				include: [
					{
						model: data.Cartao_Pedido,
						attributes: ["cartao_id"],
						include: [
							{
								model: data.Cartao,
								attributes: [
									"id",
									"bandeira",
									"numeroCartao",
									"final",
									"nome",
									"cvv",
									"preferencial",
								],
							},
						],
					},
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
			throw new Error(`Erro ao buscar pedidos: ${err.message}`);
		}
	}

	async confirmarPedido(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "PAGAMENTO REALIZADO";

			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao confirmar pagamento e pedido: " + error.message);
		}
	}

	async recusarPedido(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "PAGAMENTO RECUSADO";

			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao recusar pagamento: " + error.message);
		}
	}

	async cancelarPedido(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "PEDIDO CANCELADO";

			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao cancelar pedido: " + error.message);
		}
	}

	async despacharProdutos(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "EM TRANSPORTE";
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

	async recusarTroca(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "EM TROCA") {
				throw new Error("Pedido não encontrado ou não está em troca");
			}
			pedido.status = "TROCA RECUSADA";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao recusar a troca: " + error.message);
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

	async solicitarTrocaItem(vendaId, dataPedido) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "ENTREGUE") {
				throw new Error("Pedido não encontrado");
			}

			PedidoServices.pedidoTroca = dataPedido;
			pedido.status = "EM TROCA";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao solicitar troca: " + error.message);
		}
	}

	async solicitarCancelamento(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			pedido.status = "AGUARDANDO CANCELAMENTO";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao solicitar troca: " + error.message);
		}
	}

	async enviarItens(vendaId) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			console.log(pedido);
			if (
				!pedido ||
				(pedido.status.toUpperCase() !== "TROCA AUTORIZADA" &&
					pedido.status.toUpperCase() !== "AGUARDANDO CANCELAMENTO")
			) {
				throw new Error("Pedido não encontrado");
			}
			pedido.status = "ITENS ENVIADOS";
			await pedido.save();
			return pedido;
		} catch (error) {
			throw new Error("Erro ao alterar status - Enviar itens:" + error.message);
		}
	}

	async confirmarRecebimento(vendaId, cupomData) {
		try {
			const pedido = await data.Pedido.findByPk(vendaId);
			if (!pedido || pedido.status.toUpperCase() !== "ITENS ENVIADOS") {
				throw new Error("Pedido não encontrado");
			}

			let geraCupomTroca;
			console.log(PedidoServices.pedidoTroca);
			if (PedidoServices.pedidoTroca.length) {
				geraCupomTroca = await cupomServices.createRegistro({
					nome: `TROCA${vendaId}`,
					valor: 45,
					tipo: "TROCA",
					ativo: true,
					cliente_id: PedidoServices.pedidoTroca.valorValeTroca,
					pedido_id: vendaId,
				});
			} else {
				geraCupomTroca = await cupomServices.createRegistro(cupomData);
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
