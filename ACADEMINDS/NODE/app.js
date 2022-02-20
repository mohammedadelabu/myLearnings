const http = require("http");
const routes = require('./routes')

const server = http.createServer(routes);

const PORT = process.env.port || 3000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.....`)
});
