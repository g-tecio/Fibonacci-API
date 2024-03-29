var http = require('http');
var fibo = require('./lib/fibo');

var server = http.createServer(function (req, res) {

    

    if (req.url.match(/^(\/fibonacci\/)(\d+)$/)) {
        res.writeHead(200, { "Content-Type": "text/html" });
        let requested_num = fibo.getUrlNum(req.url);
        if (requested_num > 10000) {
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Fibonacci Response</title>
                    </head>
                    <body>
                        <h1>Fibonacci response</h1>
                        <p>Number limit exceed</p>
                    </body>
                </html>
            `);
        } else {
            res.writeHead(200, { "Content-Type": "text/json" });
            res.end(JSON.stringify(fibo.fiboSeries(requested_num)));
        }

    } else {
        res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Node JS Server</title>
                </head>
                <body>
                    <h1>Hello I'm a Node JS Server</h1>
                    <p>${req.url}</p>
                    <p>${req.method}</p>
                </body>
            </html>
        `);
    }

});

server.listen(3000);

console.log("Server listening on port 3000");



