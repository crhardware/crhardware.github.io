'use strict'
var serve = require('koa-static');
var views = require('co-views');
var koa = require('koa');
var path = require('path');
var fs = require('fs');
var app = koa();
global.navigator = {userAgent:''};//material-ui 使用

var indexJsPath = path.join(__dirname, 'public/scripts/index.js');
// console.log(indexJsPath);

require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var render = views(__dirname + '/views', {
	map: {html: 'ejs'}
});
console.log(path.join(__dirname, 'public'));
console.log(__dirname);
// app.use(serve(path.join(__dirname, 'public')));
app.use(serve(__dirname));

var productList = require('./public/json/product_list').zh_cn;

app.use(function *(next){
	navigator.userAgent = this.header['user-agent'];
	// this.body = yield render('index', {root: ReactDOMServer.renderToString(React.createElement(require('./src/app-routes'),{productList: productList}))});
	this.body = yield render('index', {root: fs.readFileSync(indexJsPath).toString()});
})

if (!module.parent) {
	app.listen(3000);
	console.log('listening on port 3000');
};

module.exports = app;