const http = require("http");
const server = http.createServer((req, res) => {
    res.write("hello from node");
    res.end();
});

server.listen("3000")