var http = require('http');
var fibo = require('./lib/fibo');

var server = http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url.match(/^(\/fibonacci\/)(\d+)$/)) {

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
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Fibonacci Response</title>
                    </head>
                    <body>
                        <h1>Fibonacci response</h1>
                        <p>${fibo.fiboSeries(requested_num)}</p>
                        <p>${req.method}</p>
                    </body>
                </html>
            `);
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



