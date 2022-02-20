const http = require('http');
const routers = require('./routers')

const server = http.createServer(routers)

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Server is listening on PORT ${port}.....`);
})