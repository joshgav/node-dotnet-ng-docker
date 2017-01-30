var os      = require('os');
var request = require('request');
var morgan  = require('morgan');
var express = require('express');
var redis   = connectToCache();

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan("common"));

// application -------------------------------------------------------------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// api ------------------------------------------------------------
app.get('/api', function (req, res) {
    // Increment requestCount each time API is called
    if (!redis) { redis = connectToCache(); }
    redis.incr('requestCount', function (err, reply) {
        var requestCount = reply;
    });

    // Invoke service-b
    request('http://service-b', function (error, response, body) {
        res.send('Hello from service A running on ' + os.hostname() + ' and service B says: ' + body);
    });
});

app.get('/metrics', function (req, res) {
    if (!redis) { redis = connectToCache(); }
    redis.get('requestCount', function (err, reply) {
        res.send({ requestCount: reply });
    });
});
// /end api -----------------------------------------------------------

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

process.on("SIGINT", () => {
    process.exit(130 /* 128 + SIGINT */);
});

process.on("SIGTERM", () => {
    console.log("Terminating...");
    server.close();
});

function connectToCache() {
    var redis = require('redis').createClient("redis://mycache");
    return redis;
}
