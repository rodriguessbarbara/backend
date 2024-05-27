const { verify, decode } = require("jsonwebtoken");
const jsonSecret = require("../config/json-secret");

module.exports = async (request, response, next) => {
	const token = request.headers.authorization;

	if (!token) return response.status(401).send("Access token nao informado");

	const [, accessToken] = token.split(" ");

	try {
		verify(accessToken, jsonSecret.secret);

		const { id, email } = await decode(accessToken);
		request.clienteId = id;
		request.clienteEmail = email;

		return next();
	} catch (err) {
		response.status(401).send("Usuario não autorizado");
	}
};
