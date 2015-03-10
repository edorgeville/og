var Pageres = require('pageres');
var express = require('express');
var app = express();

var __dirname = 'public/';

console.log('Configuring...');

var date = new Date();

app.get('/:name', function (req, res, next) {
    res.sendFile(req.params.name, {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }, function (err) {});
});

app.get('/*', function (req, res) {
    res.redirect('/screenshot.png');
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

getScreenshot();

setTimeout(function() {
    getScreenshot();
}, 60 * 60 * 24);

function getScreenshot(){
    var pageres = new Pageres({delay: 2})
        .src('erwandorgeville.com', ['1200x700'], {
            filename: 'screenshot',
            crop: true
        })
        .dest(__dirname);

    console.log('Running...');

    pageres.run(function (err) {
        if (err) {
            throw err;
        }

        console.log('Done rendering !');
    });
}