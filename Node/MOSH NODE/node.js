
//SYNC READING OF FILES
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);


//ASYNC READING OF FILES
const fs = readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Results', files);
});

//reading: this will buffer
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
    });
});
server.listen(8000);

//using stream is preffered
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res);
});
server.listen(8000);

//There are 5 kinds of streams: readable, writable, transform, duplex, and "classic".