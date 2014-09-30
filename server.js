
/**
 * Module dependencies.
 */
var environments = "production";

var express = require('express');
var navi = require('./routes/navigation');
var email = require('./routes/email')

var http = require('http');
var path = require('path');

var app = express();

// all environments
if (environments == "development"){
	var port = process.env.PORT || 3000;
	var ipaddress = null;
}
else if (environments == "production"){
	var ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP;
	var port = process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || 8080;
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', navi.index);
app.get('/resume', navi.resume);
app.get('/contact', navi.contact);
app.post('/sendMail', email.sendMail)



http.createServer(app).listen(port, ipaddress , function(){
  console.log('Express server listening on port ' + app.get('port'));
});
