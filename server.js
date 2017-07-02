// Get dependencies
var express = require('express');
var path = require('path');
var http = require('http');
// var https = require('https');
// var url = require('url');
var bodyParser = require('body-parser');
// var NodeCache = require("node-cache");
// myCache = new NodeCache();
// var cookieParser = require('cookie-parser');
//var cors = require('cors')

// Get our API routes
// var api = require('./server/routes/api');
// var config = require('./ConfigFiles/config.json');
// var cfenv = require('cfenv');
// appEnv = cfenv.getAppEnv();
// var cluster = require('cluster');
var app = express();
// var fs = require('fs');
// var env = app.get('env');
// var yaml = require('js-yaml');
// var configFile = './configuration/' + env + '.yml';
// configFile = fs.existsSync(configFile) ? configFile : './configuration/development.yml'
// configSettings = yaml.load(fs.readFileSync(configFile));
// console.log("configSettings" + JSON.stringify(configSettings));
// var host = configSettings.login.host;
// console.log("Environment- " + env);



//MONGO 
// var mongo = require('./ConfigFiles/mongo');
var webService = require('./server/services/webapp.service');
var MongoClient = require('mongodb').MongoClient;

// Parsers for POST data
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Get port from environment and store in Express.
var port = process.env.PORT || '3000';
app.set('port', port);

// create MONGO connections

app = webService.setupMiddlewares(app);

app = webService.setupRestRoutes(app);

webService.setupMongooseConnections();
// mongo.setupMongooseConnections();

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Hey Divesh Server running on localhost:${port}`));