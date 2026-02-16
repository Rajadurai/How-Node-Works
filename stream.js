const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1 : Read data from file
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //solution2: Stream
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log("error");
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });
  //Solution3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); //readableSource.pipe(writableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening.......");
});
