var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	cors = require('cors'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 9005,
	app = express();

//requiring files
// var user = require('./SRC/server/serverCtrl');

//middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
// app.post('/api/user', user.postUser);
// app.put('/api/user/:id', user.updateUser);
// app.delete('/api/user/:id', user.deleteUser);
// app.get('/api/users', user.getAllUsers);

//connection
var mongoUri = "mongodb://localhost:27017/user";
// var mongoUri = "mongodb://localhost:27017/Kal-El";

mongoose.connect(mongoUri, function() {
	console.log("I'm connected to the DataBase: " + mongoUri);
})

app.listen(port, function() {
	console.log("I'm listening on port: " + port)
});