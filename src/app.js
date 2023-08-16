const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('cookie-session');
const cors = require('cors');
const{ Server: HttpServer } = require('http');

const app = express(); 
const httpServer = new HttpServer(app);


//MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
	cookie:{
		secure: true,
		maxAge:60000
	},
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
	allowedHeaders: ['Access-Control-Allow-Origin', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
	credentials: true
}));
//ROUTES

app.get('/home', (req, res) => {
	res.send('hola mundo 6');
});



module.exports = httpServer;