const http = require("http");
const port = 5050;

const dbConnection = true;

if(!dbConnection){
    process.exit(1)
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>First node app</title>
            </head>
            <body>
                <h1>Welcome to my node app</h1>
            </body>
            </html>    
            `);
      break;
    case "/admin":
      res.end(`welcome to the admin page`);
      break;
    case "/user":
      res.end(`welcome to the user page`);
      break;
      default:
        res.end(`page not found`)
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
