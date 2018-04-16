/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var app = express();

//var db;

//var cloudant;

var fileToUpload;

/*var dbCredentials = {
    dbName: 'my_sample_db'
};*/

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var cors=require('cors');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '');
//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/views/style')));

// added for angular
app.use('/Controllers', express.static(path.join(__dirname, '/Controllers')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/img', express.static(path.join(__dirname, '/img')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/Scripts', express.static(path.join(__dirname, '/Scripts')));
app.use('/vendor', express.static(path.join(__dirname, '/vendor')));
app.use('/Services', express.static(path.join(__dirname, '/Services')));
app.use('/Applications', express.static(path.join(__dirname, '/views/Applications')));
app.use('/Login', express.static(path.join(__dirname, '/views/Login')));
app.use('/Accounts', express.static(path.join(__dirname, '/views/Accounts')));
app.use('/Portfolio', express.static(path.join(__dirname, '/views/Portfolio')));
app.use('/Main', express.static(path.join(__dirname, '/views/Main')));
app.use('/Sector', express.static(path.join(__dirname, '/views/Sector')));
app.use('/Industry', express.static(path.join(__dirname, '/views/Industry')));
app.use('/ApplicationGroups', express.static(path.join(__dirname, '/views/ApplicationGroups')));


app.options('*', cors());
app.use(cors());

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});
