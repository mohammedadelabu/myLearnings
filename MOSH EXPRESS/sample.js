const http = require('http');
const port = 7000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(port, () => console.log(`Server is listening on port ${port}`))