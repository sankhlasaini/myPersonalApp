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

// Parsers for POST data
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);
//var routes={partnerInvitationSend : require('./server/routes/partnerInvitation.js').partnerInvitationSend }
//app.post('/partnerInvitationSend' , routes.partnerInvitationSend);



// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//     console.log('******************************************', req.url);
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

//login
app.post('/login', function(req, res) {
    console.log(req.body, typeof(req.body))
    res.send({ data: 'this is from server' });
})

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Hey Divesh Server running on localhost:${port}`));