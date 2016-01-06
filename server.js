var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config.js')
var fs = require('fs')
var sleep = require('sleep');
var jade = require('jade');
var superagent = require('superagent');
//var jsonApi = require('superagent-jsonapify');

//jsonApi(superagent);



var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        version: false,
        chunks: false,
        children: false,
    }
}))
app.use(webpackHotMiddleware(compiler))

app.get("/mock/*.json", function(req, res){
    var url = __dirname + '/mock/'+req.params[0]+'.json';
    var _data = JSON.parse(fs.readFileSync(url));
    sleep.sleep(3);

    res.send(_data);
});


app.get("/*", function(req, res) {
    var url = __dirname + '/mock/index.json';
    var _data = JSON.parse(fs.readFileSync(url));
    var locals = {
        props: JSON.stringify(_data),
    };
    superagent.get('http://localhost:3000/static/index.jade').end(function(err, respone){
        if(!err){
            var layout = respone.text;
            var html = jade.compile(layout, { pretty: true })(locals);
            res.send(html);
        }else{
            res.send('模板渲染错误');
        }
    });
    //var layout = process.cwd() + '/index.jade';
    //var html = jade.compileFile(layout, { pretty: true })(locals);
    //res.send(html);
    //res.sendFile(__dirname + '/index.html')
});


app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
