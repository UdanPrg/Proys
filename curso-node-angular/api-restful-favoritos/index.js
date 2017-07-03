'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/prueba', function(req, res){

	res.status(200).send({
					data: [2,3,4],
					message: "Hola mundo con NodeJS y EXPRESS"
				});
});

app.listen(port, function(){
	console.log('API REST Favoritos funcionando en http://localhost:'+port);
});