var koa = require('koa');
var app = koa();

global.navigator = {userAgent:''};

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
  console.log('X-Response-Time'+ ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
    console.log('----------------------userAgent-before----------------------');
    console.log(navigator.userAgent);
    console.log('----------------------userAgent-behind----------------------');
    navigator.userAgent = this.header['user-agent'];
	console.log(navigator.userAgent);
    console.log('----------------------userAgent-finish----------------------');
});

console.log(global.navigator);

app.listen(3000);