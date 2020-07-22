const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to home page baby");
});

const port = process.env.port || 8080;
//make server listen on certain port
app.listen(port, () => {
	console.log("Wazzzaaaappppp");
});
