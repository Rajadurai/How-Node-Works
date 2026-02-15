const EventEmitter = require("events");
const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("new sales", () => {
  console.log("There is a new sales open");
});

myEmitter.on("new sales", () => {
  console.log("consumer name : rajadurai");
});

myEmitter.on("new sales", (stock) => {
  console.log(`there are now ${stock} items left in stock.`);
});

myEmitter.emit("new sales", 9);
///////////////////////////////////////////////////
//SERVER
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request received");
  console.log(req.url);
  res.end("request received");
});
server.on("request", (req, res) => {
  console.log("another request received");
});
server.close("close", () => {
  console.log("server closed");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request....");
});
