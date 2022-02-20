const http = require('http');
const PORT = 3000;

// const server = http.createServer((req, res) => {
server.on('request', (req, res) => {
    if(req.url === ('/friends')){

        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });

        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'application/json'),

        res.end(JSON.stringify({
            id: 1,
            name: "Emperor is at home"
    }));

    } else if(req.url === ('/message')) {
        res.setHeader = ('Content-Type', 'text/html'),
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello Isaac!</h2>');
        res.end();
        
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`);
});