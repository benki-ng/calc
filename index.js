
//const equ = require('lib/equation')
var express = require('express')
var app = express()
var parse = require('body-parser')
var math = require('mathjs');

console.log('calculator program running')


app.listen(8080);
app.use('/',express.static('static'));



app.use(parse.json());
app.use(parse.urlencoded({extended : true}));

//if standard calculation submitted
app.post("/evaluate", function(request, response) {
    console.log(request.body['sum']);
    console.log(math.eval(request.body['sum']));
    response.send({"result":math.eval(request.body['sum'])})
});

//if factorial submitted
app.post("/factorial", function(request, response) {
    console.log(request.body['sum']);
    response.send({"result":math.factorial(request.body['sum'])})
});
