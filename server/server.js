//taken from https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
//and https://expressjs.com/en/starter/hello-world.html

const express = require("express");
const app = express();
const port = 7000;
//sockets
const io = require("socket.io")();

app.get("/", (req, res) => res.send("Hello World!"));

//Socket

io.on("connection", client => {
	client.on("subscribeToTimer", interval => {
		console.log("client is subscribing to timer with interval ", interval);
		setInterval(() => {
			console.log("emitting");
			client.emit("timer", new Date().toLocaleTimeString());
		}, interval);
	});
});

io.listen(2000);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//ss
