const Services = require("./Services");
const data = require("../models/index");

class ClienteServices extends Services {
	constructor() {
		super("Cliente");
	}

	async verificaCliente(email, senha) {
		try {
			const resultado = await data.Cliente.findOne({
				where: {
					email: email,
					senha: senha,
				},
			});

			if (resultado && resultado.ativo) {
				return resultado.id;
			} else if (!resultado) {
				throw new Error("Usuário e/ou senha incorreto");
			} else {
				throw new Error("Sua conta está inativa");
			}
		} catch (err) {
			throw new Error(err);
		}
	}

	async chamaTudoClientes() {
		try {
			const clientes = await data.Cliente.findAll({
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
					{
						model: data.Endereco,
						attributes: [
							"id",
							"lagradouro",
							"enderecoResidencial",
							"tipoResidencia",
							"num",
							"CEP",
							"bairro",
							"cidade",
							"estado",
							"pais",
						],
					},
					{
						model: data.Pedido,
						attributes: [
							"id",
							"tituloLivro",
							"formaPagamento",
							"valor",
							"quantidade",
							"status",
							"cupom_id",
						],
					},
				],
			});

			return clientes;
		} catch (err) {
			throw new Error(`Erro ao buscar clientes: ${err.message}`);
		}
	}

	async chamaTudoClienteById(userId) {
		try {
			const cliente = await data.Cliente.findOne({
				where: {
					id: userId,
				},
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
					{
						model: data.Endereco,
						attributes: [
							"id",
							"lagradouro",
							"enderecoResidencial",
							"tipoResidencia",
							"num",
							"CEP",
							"bairro",
							"cidade",
							"estado",
							"pais",
						],
					},
					{
						model: data.Pedido,
						attributes: [
							"id",
							"tituloLivro",
							"formaPagamento",
							"valor",
							"quantidade",
							"status",
							"cupom_id",
						],
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
						],
					},
				],
			});
			return cliente;
		} catch (err) {
			throw new Error(`Erro ao buscar cliente: ${err.message}`);
		}
	}
}

module.exports = ClienteServices;
