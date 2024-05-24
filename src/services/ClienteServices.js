const Services = require("./Services");
const data = require("../models/index");
const { hash } = require("bcryptjs");
const { compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");
const jsonSecret = require("../config/json-secret");

class ClienteServices extends Services {
	constructor() {
		super("Cliente");
	}

	async createCliente(dataCliente) {
		try {
			const cliente = await data.Cliente.findOne({
				where: {
					email: dataCliente.email,
				},
			});

			if (cliente) {
				throw new Error("usuário já cadastrado!");
			}

			const senhaHash = await hash(dataCliente.senha, 8);
			const novoCliente = await data.Cliente.create({
				nome: dataCliente.nome,
				cpf: dataCliente.cpf,
				email: dataCliente.email,
				senha: senhaHash,
				genero: dataCliente.genero,
				telefone: dataCliente.telefone,
				dataNascimento: dataCliente.dataNascimento,
				ativo: dataCliente.ativo,
				role: dataCliente.role,
			});

			return novoCliente;
		} catch (err) {
			throw new Error(`Erro ao criar conta: ${err.message}`);
		}
	}

	async login(email, senha) {
		try {
			const cliente = await data.Cliente.findOne({
				attributes: [
					"id",
					"nome",
					"cpf",
					"email",
					"senha",
					"genero",
					"telefone",
					"dataNascimento",
					"ativo",
					"role",
				],
				where: {
					email: email,
				},
			});

			if (!cliente) {
				throw new Error("usuário não existe!");
			}

			const isSenhaIguais = await compare(senha, cliente.senha);
			if (!isSenhaIguais) {
				throw new Error("Usuário e/ou senha incorreto");
			} else if (isSenhaIguais && !cliente.ativo) {
				throw new Error("conta está inativa");
			}

			const accessToken = sign(
				{
					id: cliente.id,
					email: cliente.email,
				},
				jsonSecret.secret,
				{ expiresIn: 86400 }
			);

			return accessToken;
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async validateToken(token) {
		if (!token) throw new Error("Token não fornecido");

		try {
			const decoded = verify(token, jsonSecret.secret);
			const user = await data.Cliente.findByPk(decoded.id);
			if (!user) throw new Error("Usuário não encontrado");
			return user;
		} catch (error) {
			throw new Error("Token inválido");
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
							"formaPagamento",
							"valor",
							"quantidade",
							"status",
							"cupom_id",
							"createdAt",
							"updatedAt",
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
							"formaPagamento",
							"valor",
							"quantidade",
							"status",
							"cupom_id",
							"createdAt",
							"updatedAt",
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
					},
				],
			});
			return cliente;
		} catch (err) {
			throw new Error(`Erro ao buscar cliente: ${err.message}`);
		}
	}

	async atualizaSenhaCliente(id, senha) {
		try {
			const cliente = await data.Cliente.findOne({
				attributes: ["senha"],
				where: {
					id: id,
				},
			});

			const isSenhaIguais = await compare(senha, cliente.senha);
			if (isSenhaIguais) {
				throw new Error("a nova senha não pode ser igual a anterior");
			}

			const novaSenhaHash = await hash(senha, 8);
			const novaSenha = data.Cliente.update(
				{ senha: novaSenhaHash },
				{
					where: { id: id },
				}
			);

			await clienteServices.updateRegistro({ senha: novaSenhaHash }, id);

			return novaSenha;
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

const clienteServices = new ClienteServices();

module.exports = ClienteServices;
