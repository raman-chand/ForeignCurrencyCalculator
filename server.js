const express = require('express'),
 engines = require('consolidate'),
 bodyParser = require('body-parser'),
 cookieParser = require('cookie-parser'),
 flash = require('connect-flash'),
 expressSession = require('express-session'),
 mongoose = require('mongoose'),
 methodOverride = require('method-override'),
 oxr = require('open-exchange-rates'),
 fx = require('money'),
 config = require('./config/database'),
 cors = require('cors'),
 path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(flash());
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// View Engine backup for Angular JS
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended : true }));

// Handler for internal server errors
function errorHandler(err, req, res, next){
	console.error(err.message);
	console.error(err.stack);
	res.status(500).render('errorTemplate', { error : err });
}

// MongoDB connection
mongoose.connect(config.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Successfully connected to Database.\n" + config.url);

	// Load Models
	app.models = require('./models/index');
	// Load Routes
	const index = require('./routes/index'),
		calculator = require('./routes/calculator'),
		dashboard = require('./routes/dashboard');

// Routes Middleware
	app.use('/', index.registerRouter());
	app.use('/calculator', calculator.registerRouter());
	app.use('/dashboard', dashboard.registerRouter());

	var server = app.listen(8009, () => {
		var port = server.address().port;
		console.log('Express server listening on port %s.', port);
	});
});