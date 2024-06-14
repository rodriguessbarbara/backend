const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./router");
const path = require("path");

const port = 8000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors());
routes(app);

app.listen(port, () => {
	console.log(`escutando a porta ${port}`);
});

process.on("SIGINT", async () => {
	process.exit(0);
});
