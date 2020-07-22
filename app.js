const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to home page baby");
});

//make server listen on certain port
app.listen(3000, () => {
	console.log("Wazzzaaaappppp");
});
