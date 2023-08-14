const express = require('express');
const path = require('path');
const{ Server: HttpServer } = require('http');

const app = express(); 
const httpServer = new HttpServer(app);


//MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES

app.get('/', (req, res) => {
	res.send('hola mundo 2');
});



module.exports = httpServer;